// ============================================================
// CONFIGURAÇÃO — URL E SENHA JÁ ATUALIZADAS
// ============================================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMezU0QgO_TFRI--YUdgyR7-jphvoqlcsNdNuZjasvBm6B5TgpMXVTC3RubJZGecah/exec";
const SENHA_ADMIN = "valor2025"; // ← troque para a senha que quiser

// ============================================================
// ESTADO GLOBAL
// ============================================================
let todosRegistros     = [];
let registrosFiltrados = [];
let sortField = "dataFp";
let sortAsc   = false;

// ============================================================
// LOGIN
// ============================================================
function fazerLogin() {
  const val = document.getElementById("senha-input").value;
  if (val === SENHA_ADMIN) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
    carregarDados();
  } else {
    document.getElementById("login-erro").style.display = "block";
    document.getElementById("senha-input").value = "";
    document.getElementById("senha-input").focus();
  }
}

function logout() {
  document.getElementById("admin-panel").style.display = "none";
  document.getElementById("login-container").style.display = "block";
  document.getElementById("senha-input").value = "";
  document.getElementById("login-erro").style.display = "none";
}

// ============================================================
// CARREGAR DADOS
// ============================================================
async function carregarDados() {
  mostrarLoading(true);
  try {
    const resp = await fetch(`${APPS_SCRIPT_URL}?action=getAll`);
    const json = await resp.json();
    todosRegistros     = json.data || [];
    registrosFiltrados = [...todosRegistros];
    popularFiltroAssessor();
    renderizarTudo();
    document.getElementById("ultimo-update").textContent =
      `Atualizado: ${new Date().toLocaleTimeString("pt-BR")}`;
  } catch (err) {
    alert("Erro ao carregar dados. Verifique a URL do Apps Script.");
  } finally {
    mostrarLoading(false);
  }
}

// ============================================================
// RENDERIZA TUDO
// ============================================================
function renderizarTudo() {
  renderMetricas();
  renderBarChart();
  renderAlertas();
  renderFeed();
}

// ============================================================
// MÉTRICAS
// ============================================================
function renderMetricas() {
  const total     = registrosFiltrados.length;
  const interesse = registrosFiltrados.filter(r => r.status === "Interesse imediato").length;
  const analise   = registrosFiltrados.filter(r => r.status === "Em análise").length;
  const vencidos  = calcularVencidos(registrosFiltrados).length;

  document.getElementById("m-total").textContent     = total;
  document.getElementById("m-interesse").textContent = interesse;
  document.getElementById("m-analise").textContent   = analise;
  document.getElementById("m-vencidos").textContent  = vencidos;
}

// ============================================================
// BAR CHART
// ============================================================
function renderBarChart() {
  const produtos = [
    "Crédito","Câmbio","Previdência","Consórcio",
    "Mercado de Capitais","Seguro PF","Seguro PJ"
  ];

  const contagem = {};
  produtos.forEach(p => contagem[p] = 0);

  registrosFiltrados.forEach(r => {
    if (!r.produtos) return;
    produtos.forEach(p => {
      if (r.produtos.includes(p)) contagem[p]++;
    });
  });

  const max = Math.max(...Object.values(contagem), 1);
  document.getElementById("bar-chart").innerHTML = produtos
    .sort((a, b) => contagem[b] - contagem[a])
    .map(p => {
      const pct = Math.round((contagem[p] / max) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label">${p}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="bar-count">${contagem[p]}</div>
        </div>`;
    }).join("");
}

// ============================================================
// ALERTAS
// ============================================================
function calcularVencidos(registros) {
  const hoje = new Date();
  hoje.setHours(0,0,0,0);
  return registros.filter(r => {
    if (r.status !== "Em análise" || !r.diasRetorno || !r.dataFp) return false;
    const dataRetorno = new Date(r.dataFp);
    dataRetorno.setDate(dataRetorno.getDate() + parseInt(r.diasRetorno));
    return dataRetorno < hoje;
  });
}

function renderAlertas() {
  const hoje = new Date();
  hoje.setHours(0,0,0,0);

  const alertas = todosRegistros
    .filter(r => r.status === "Em análise" && r.diasRetorno && r.dataFp)
    .map(r => {
      const dataRetorno = new Date(r.dataFp);
      dataRetorno.setDate(dataRetorno.getDate() + parseInt(r.diasRetorno));
      const diffDias = Math.ceil((dataRetorno - hoje) / (1000 * 60 * 60 * 24));
      return { ...r, dataRetorno, diffDias };
    })
    .filter(r => r.diffDias <= 3)
    .sort((a, b) => a.diffDias - b.diffDias);

  const container = document.getElementById("alertas-container");

  if (!alertas.length) {
    container.innerHTML = `<div class="alertas-vazio">✅ Nenhum follow-up pendente no momento.</div>`;
    return;
  }

  container.innerHTML = `<div class="alerta-list">` +
    alertas.map(a => {
      let classe, badge;
      if (a.diffDias < 0)      { classe = "vencido"; badge = `Vencido há ${Math.abs(a.diffDias)}d`; }
      else if (a.diffDias === 0){ classe = "hoje";    badge = "Vence hoje!"; }
      else                      { classe = "proximo"; badge = `Vence em ${a.diffDias}d`; }
      return `
        <div class="alerta-card ${classe}">
          <div class="alerta-info">
            <div class="alerta-nome">${a.clienteNome}</div>
            <div class="alerta-meta">
              ${a.assessor} &nbsp;|&nbsp; ${a.produtos || "—"} &nbsp;|&nbsp;
              Retorno: ${formatDate(a.dataRetorno.toISOString().split("T")[0])}
            </div>
          </div>
          <div class="alerta-badge">${badge}</div>
        </div>`;
    }).join("") +
  `</div>`;
}

// ============================================================
// FILTROS
// ============================================================
function popularFiltroAssessor() {
  const sel = document.getElementById("filtro-assessor");
  const assessores = [...new Set(todosRegistros.map(r => r.assessor))].sort();
  sel.innerHTML = `<option value="">Todos</option>` +
    assessores.map(a => `<option>${a}</option>`).join("");
}

function aplicarFiltros() {
  const assessor = document.getElementById("filtro-assessor").value;
  const produto  = document.getElementById("filtro-produto").value;
  const status   = document.getElementById("filtro-status").value;
  const faixa    = document.getElementById("filtro-faixa").value;
  const dataIni  = document.getElementById("filtro-data-ini").value;
  const dataFim  = document.getElementById("filtro-data-fim").value;

  registrosFiltrados = todosRegistros.filter(r => {
    if (assessor && r.assessor !== assessor) return false;
    if (produto  && !r.produtos?.includes(produto)) return false;
    if (status   && r.status !== status) return false;
    if (faixa    && r.faixa !== faixa) return false;
    if (dataIni  && r.dataFp < dataIni) return false;
    if (dataFim  && r.dataFp > dataFim) return false;
    return true;
  });

  renderizarTudo();
}

function limparFiltros() {
  ["filtro-assessor","filtro-produto","filtro-status","filtro-faixa",
   "filtro-data-ini","filtro-data-fim"].forEach(id => {
    document.getElementById(id).value = "";
  });
  registrosFiltrados = [...todosRegistros];
  renderizarTudo();
}

// ============================================================
// FEED / TABELA
// ============================================================
function sortTable(field) {
  sortAsc = (sortField === field) ? !sortAsc : true;
  sortField = field;
  renderFeed();
}

function renderFeed() {
  const sorted = [...registrosFiltrados].sort((a, b) => {
    const va = (a[sortField] || "").toString().toLowerCase();
    const vb = (b[sortField] || "").toString().toLowerCase();
    return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
  });

  window._sortedRegistros = sorted;

  const tbody = document.getElementById("feed-body");
  const empty = document.getElementById("feed-empty");
  const table = document.getElementById("feed-table");
  const count = document.getElementById("filtro-count");

  count.textContent = `${sorted.length} registro${sorted.length !== 1 ? "s" : ""} encontrado${sorted.length !== 1 ? "s" : ""}`;

  if (!sorted.length) {
    table.style.display = "none";
    empty.style.display = "block";
    return;
  }

  table.style.display = "table";
  empty.style.display = "none";

  tbody.innerHTML = sorted.map((r, i) => {
    const tags = (r.produtos || "").split(",").map(p => p.trim()).filter(Boolean)
      .map(p => `<span class="tag">${p}</span>`).join("");

    let statusClass = "sem";
    if (r.status === "Interesse imediato") statusClass = "interesse";
    if (r.status === "Em análise")         statusClass = "analise";

    return `
      <tr>
        <td>${formatDate(r.dataFp)}</td>
        <td>${r.assessor}</td>
        <td>
          <div style="font-weight:600">${r.clienteNome}</div>
          <div style="font-size:11px;color:#9ca3af">Conta: ${r.clienteCodigo}</div>
        </td>
        <td>${r.faixa || "—"}</td>
        <td><div class="produtos-cell">${tags || "—"}</div></td>
        <td><span class="status-badge ${statusClass}">${r.status}</span></td>
        <td><button class="btn-detalhe" onclick="abrirModal(${i})">Ver mais</button></td>
      </tr>`;
  }).join("");
}

// ============================================================
// MODAL
// ============================================================
function abrirModal(idx) {
  const r = window._sortedRegistros[idx];
  if (!r) return;

  const tags = (r.produtos || "").split(",").map(p => p.trim()).filter(Boolean)
    .map(p => `<span class="tag">${p}</span>`).join(" ") || "—";

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-title">📋 Detalhe do Registro</div>
    <div class="modal-row">
      <div class="modal-row-label">Cliente</div>
      <div class="modal-row-value">${r.clienteNome}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Código XP</div>
      <div class="modal-row-value">${r.clienteCodigo}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Assessor</div>
      <div class="modal-row-value">${r.assessor}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Patrimônio</div>
      <div class="modal-row-value">R$ ${r.patrimonio} &nbsp;|&nbsp; ${r.faixa}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Data do FP</div>
      <div class="modal-row-value">${formatDate(r.dataFp)}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Produtos com Oportunidade</div>
      <div class="modal-row-value">${tags}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Detalhes dos Produtos</div>
      <div class="modal-row-value" style="white-space:pre-line">${(r.detalhesProdutos || "—").replace(/ \/ /g, "\n")}</div>
    </div>
    <div class="modal-row">
      <div class="modal-row-label">Status</div>
      <div class="modal-row-value">${r.status}${r.diasRetorno ? ` — retornar em ${r.diasRetorno} dias` : ""}</div>
    </div>
    ${r.observacoes ? `
    <div class="modal-row">
      <div class="modal-row-label">Observações</div>
      <div class="modal-row-value">${r.observacoes}</div>
    </div>` : ""}
    <div class="modal-row">
      <div class="modal-row-label">Registrado em</div>
      <div class="modal-row-value">${new Date(r.timestamp).toLocaleString("pt-BR")}</div>
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("open");
}

function fecharModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

// ============================================================
// EXPORTAR CSV
// ============================================================
function exportarCSV() {
  if (!registrosFiltrados.length) {
    alert("Nenhum registro para exportar.");
    return;
  }

  const headers = [
    "Timestamp","Assessor","Cliente","Código XP","Patrimônio",
    "Faixa","Data FP","Produtos","Detalhes Produtos",
    "Status","Dias Retorno","Observações"
  ];

  const rows = registrosFiltrados.map(r =>
    [
      r.timestamp, r.assessor, r.clienteNome, r.clienteCodigo,
      r.patrimonio, r.faixa, r.dataFp, r.produtos,
      r.detalhesProdutos, r.status, r.diasRetorno, r.observacoes
    ].map(v => `"${(v || "").toString().replace(/"/g, '""')}"`).join(",")
  );

  const csv  = [headers.join(","), ...rows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `valor-pj2-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// LOADING
// ============================================================
function mostrarLoading(show) {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.className = "loading-overlay";
    overlay.innerHTML = `
      <div class="spinner"></div>
      <span>Carregando dados...</span>`;
    document.body.appendChild(overlay);
  }
  overlay.classList.toggle("open", show);
}

// ============================================================
// UTILS
// ============================================================
function formatDate(str) {
  if (!str) return "—";
  const [y, m, d] = str.split("-");
  return `${d}/${m}/${y}`;
}
