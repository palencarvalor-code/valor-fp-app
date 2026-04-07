// ===== CONFIGURAÇÃO =====
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyMezU0QgO_TFRI--YUdgyR7-jphvoqlcsNdNuZjasvBm6B5TgpMXVTC3RubJZGecah/exec";

const ASSESSORES = [
   "Adyr Nicchio Neto","Adriano Morandi Rondeli","Alecio Bernardino da Silva",
  "Alessandra Reis Estanislau","Amanda Boaventura Xavier","Amanda Martins Soares",
  "Ana Carolina Gomes dos Santos","Andre Pereira da Motta","Andrea de Aguiar Dias Saraiva Gomes",
  "Arthur Massucatti Rondeli","Athos Fontenelle Fittipaldi","Bernardo Cascao Bougleux Couto",
  "Bernardo Chalub Pereira da Costa","Bruno Mansur de Mello Goncalves","Bruno Matosinhos Sbraletta",
  "Bruno Moraes de Caldas","Bruno Thomaz Lott","Caio Cesar Silva",
  "Camila Barbosa de Souza Garcia","Carlos Augusto Ribeiro Lima","Cristiane Gomes Pereira",
  "Daniel de Albuquerque Cola Pim","Daniel Giestas Basilio","Danilo de Vellasco Villela",
  "Danilo dos Santos Chaves","Danilo Weslei Moraes de Souza","Darlington de Paiva Bernardes",
  "Douglas Niero","Durval Alaisson da Silva Vieira","Eduardo de Oliveira Santos",
  "Eduardo Depes Vergara Lopes","Enzo de Andrade Dorigheto","Eurico Carvalho Caldas",
  "Eustaquio Mafra","Everton Santos de Sousa","Fabiano Pires Vieira",
  "Fabiano Werner","Fabio Saraiva Barbosa","Fabricio Barbosa de Lima",
  "Fabricio Vieira Lopes","Felipe Borges Santos","Felipe Pinheiro Sathler",
  "Felipe Thiago Dalpra Pessoa","Fernando Assuncao Miranda","Filippe Fioresi Sily",
  "Flavio Goncalves Maciel de Figueiredo","Francisco Felipe Avilar Teixeira","Gabriel Gomes Melo Carvalho",
  "Gabriel Grillo Pansiere","Giancarlo Sidoti","Guilherme de Assis Colossal",
  "Guilherme Margotto Gramelich","Gustavo Rodrigues Coelho","Gustavo Shigueru Tayamichi Sato",
  "Henrique Galvao Colares","Henrique Godinho Ruoccolo","Henrique Rizzi Ferreira",
  "Henrique Stancioli Tonoli","Higor Rabelo da Silva","Hindenburg de Alencar Barreto Coelho Neto",
  "Ian Araujo Lopes","Icaro Gabriel Valentim Cruz","Icaro Fortes Ventura",
  "Igor Amado Ramos","Jair Rodrigues dos Santos","Jhady Cerdeira de Vasconcelos",
  "Joao Goncalves Neto","Joao Lucas Silveira Dutra","Joao Luiz Silva Pires",
  "Joao Pedro Cordeiro Rocha","Joao Pedro Gentil Goncalves da Rocha","Joao Victor Musso Gomes de Souza",
  "Joao Victor Rossoni Ronchi","Joao Vitor Luchi Almeida","Joao Vitor Pompermayer Vettoraci",
  "Jose Eduardo Goncalves Barros","Joyce Stefanni de Sousa Rolins","Julia Bortolini Lima",
  "Juliana Castro David Alves de Lima","Juliana Macedo Soares Nascimento","Keone Reimann Kojin",
  "Konrad Campos Salomao","Leonardo Borgo Machado dos Santos","Leonardo Gustavo Pastore Dyna",
  "Leticia Veras Batista","Lorena Maria Stein de Siqueira Varejao","Lucas Andrade Felestrino",
  "Lucas Betini Motta","Lucas Carvalho Guerra","Lucas Deivid de Souza Miranda",
  "Lucas de Souza Soares","Luis Gustavo Rodrigues","Luiz Felipe Goncalves Gava",
  "Luiz Felipe Zon Werneck Guimaraes","Luiz Guilherme Beltrao Barcik","Luiz Henrique Faroni Bortolon",
  "Maicon Pizzol","Maira Vianna de Andrade","Marcelo de Moura Rosa",
  "Marcelo Messias da Silva Costa Reis","Marco Antonio Solano Salmaso","Marcus Araujo Alves dos Santos",
  "Mariana Emelly da Silva Quintanilha","Mateus Battella de Siqueira Simoes","Mateus Dias Rios",
  "Matheus Cardoso Pimentel","Matheus Menezes Machado","Mauro Bueno do Nascimento",
  "Mauricio Jose Viana Real de Lemos","Mayron Campi Lima Barbosa","Murilo Bonfim Marques",
  "Myrna Silveira de Souza Vasconcelos","Natalia Moreira Zucchi","Nicholas Goncalves Camara",
  "Paloma de Lavor Lopes","Patricia Trigueiro da Mota","Paulo Henrique Franca da Silva",
  "Pedro Aguiar Lima","Pedro Augusto Silva Machado","Pedro Borges Coleta Nascimento",
  "Pedro Fajardo da Cunha","Pedro Henrique da Costa Silva","Pedro Henrique Moutinho Campos",
  "Pedro Henrique Scaramussa Ramos","Rachel Mendonca Costa","Rafael Alves de Brito Oliveira",
  "Rafael Cataldo da Costa Souza","Rafael Goncalves Tome","Rafael Helbourn Bastos",
  "Ramon Serrao Coser","Raquel Rodrigues Pires Bermond","Roberto Balarini Junior",
  "Roberto Costa Pereira","Roberto Uillian da Silva","Romulo Nunes Goncalves",
  "Samuel Fernando Scalise Miranda Filho","Samuel Merheb Vaz Pessoa","Stefan Sarkis Woelffel Furtado",
  "Tamara Danielle da Silva","Teodoro Aragao da Rocha","Thales Nascimento de Faria",
  "Thiago Santana de Oliveira","Thiago Valencia","Tiago Damasceno de Barros Morgado",
  "Vanessa dos Passos Correa","Victor Felipe Oliveira Souza","Victor Leal Sartorio",
  "Vinicius de Moraes Mazolini","Vinicius Moraes Paris de","Vinicius Saldanha Soares Pinto",
  "Virgilio Alves Lourenco Lage","Vitor Capeli Pereira","Vitor Augusto Madeira Gomes",
  "Vitor Giacomin Pimentel","Vivian Busch","Vyctor Fialho Nacarati Tavares",
  "Wagner Leon Varejao","Walace Silva de Souza","Wesley da Silva Feitosa",
  "Willian de Angeli Prata","Yago Loureiro Comerio"
];

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("assessor");
  ASSESSORES.forEach(nome => {
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = nome;
    sel.appendChild(opt);
  });

  const hoje = new Date().toISOString().split("T")[0];
  document.getElementById("dataFp").value = hoje;

  observarProdutos();
});

// ===== NAVEGAÇÃO =====
function irPara(step) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`step-${step}`).classList.add("active");

  const total = 4;
  const indicador = document.getElementById("step-indicator");
  if (step < 5) {
    indicador.textContent = `Etapa ${step} de ${total}`;
  } else {
    indicador.textContent = "Concluído ✓";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== STEP 3: PRODUTOS =====
function toggleProduto(card) {
  const jaSelected = card.classList.contains("selecionado");
  card.classList.toggle("selecionado");

  const detalhe = card.querySelector(".produto-detalhe-input");
  if (detalhe) {
    detalhe.style.display = jaSelected ? "none" : "block";
  }

  if (jaSelected) {
    card.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
    const ta = card.querySelector("textarea");
    if (ta) ta.value = "";
  }

  atualizarSemInteresse();
}

function atualizarSemInteresse() {
  const algumSelecionado = document.querySelectorAll(".produto-card.selecionado").length > 0;
  const box = document.getElementById("sem-interesse-box");
  box.style.display = algumSelecionado ? "none" : "flex";

  if (algumSelecionado) {
    document.getElementById("chk-sem-interesse").checked = false;
  }
}

function observarProdutos() {
  atualizarSemInteresse();
}

function avancarStep3() {
  const selecionados = document.querySelectorAll(".produto-card.selecionado");
  const semInteresse = document.getElementById("chk-sem-interesse").checked;

  if (selecionados.length === 0 && !semInteresse) {
    alert("Selecione ao menos um produto ou confirme que não houve interesse.");
    return;
  }

  let faltaStatus = [];
  selecionados.forEach(card => {
    const nome = card.dataset.produto;
    const radios = card.querySelectorAll("input[type='radio']");
    const marcado = Array.from(radios).some(r => r.checked);
    if (!marcado) faltaStatus.push(nome);
  });

  if (faltaStatus.length > 0) {
    alert(`Selecione o status para: ${faltaStatus.join(", ")}`);
    return;
  }

  irPara(4);
}

// ===== STEP 4: STATUS =====
function selecionarStatus(card) {
  document.querySelectorAll(".status-card").forEach(c => c.classList.remove("selecionado"));
  card.classList.add("selecionado");

  const status = card.dataset.status;
  const grupoRetorno = document.getElementById("grupo-retorno");
  grupoRetorno.style.display = (status !== "Sem oportunidade") ? "block" : "none";
}

// ===== COLETA DE DADOS =====
function coletarDados() {
  const assessor    = document.getElementById("assessor").value;
  const dataFp      = document.getElementById("dataFp").value;
  const clienteNome = document.getElementById("clienteNome").value;
  const clienteCod  = document.getElementById("clienteCodigo").value;
  const patrimonio  = document.getElementById("patrimonio").value;
  const faixa       = document.getElementById("faixa").value;
  const observacoes = document.getElementById("observacoes").value;
  const diasRetorno = document.getElementById("diasRetorno").value;

  const statusCard = document.querySelector(".status-card.selecionado");
  const statusCliente = statusCard ? statusCard.dataset.status : "";

  const produtos = [];
  document.querySelectorAll(".produto-card.selecionado").forEach(card => {
    const nome   = card.dataset.produto;
    const radios = card.querySelectorAll("input[type='radio']");
    const status = Array.from(radios).find(r => r.checked)?.value || "";
    const obs    = card.querySelector("textarea")?.value || "";
    produtos.push({ nome, status, obs });
  });

  const semInteresse = document.getElementById("chk-sem-interesse").checked;

  return {
    assessor,
    dataFp,
    clienteNome,
    clienteCodigo: clienteCod,
    patrimonio,
    faixa,
    statusCliente,
    diasRetorno,
    observacoes,
    semInteresse,
    produtos: JSON.stringify(produtos),
    timestamp: new Date().toISOString()
  };
}

// ===== ENVIO =====
async function enviarFormulario() {
  const statusCard = document.querySelector(".status-card.selecionado");
  if (!statusCard) {
    alert("Selecione o status do cliente.");
    return;
  }

  const dados = coletarDados();

  const overlay = document.getElementById("loading-overlay");
  overlay.classList.add("open");

  try {
    const params = new URLSearchParams(dados);
    await fetch(`${SHEET_URL}?${params}`, { method: "GET", mode: "no-cors" });

    exibirResumo(dados);
    irPara(5);
  } catch (err) {
    console.error(err);
    alert("Erro ao salvar. Tente novamente.");
  } finally {
    overlay.classList.remove("open");
  }
}

// ===== RESUMO (Step 5) =====
function exibirResumo(dados) {
  const produtos = JSON.parse(dados.produtos);
  const listaProdutos = produtos.length > 0
    ? produtos.map(p =>
        `<span class="tag">${p.nome}</span> ${p.status}${p.obs ? ` — <em>${p.obs}</em>` : ""}`
      ).join("<br>")
    : "<em>Nenhum produto selecionado</em>";

  document.getElementById("resumo-box").innerHTML = `
    <strong>📅 Data:</strong> ${formatarData(dados.dataFp)}<br>
    <strong>👤 Assessor:</strong> ${dados.assessor}<br>
    <strong>🏢 Cliente:</strong> ${dados.clienteNome} ${dados.clienteCodigo ? `(${dados.clienteCodigo})` : ""}<br>
    <strong>💰 Patrimônio:</strong> ${dados.patrimonio ? `R$ ${Number(dados.patrimonio).toLocaleString("pt-BR")}` : "—"} · ${dados.faixa || "—"}<br>
    <strong>📊 Status:</strong> ${dados.statusCliente || "—"}${dados.diasRetorno ? ` · Retorno em ${dados.diasRetorno} dias` : ""}<br>
    <strong>💼 Cross Sell:</strong><br>${listaProdutos}<br>
    ${dados.observacoes ? `<strong>📝 Obs:</strong> ${dados.observacoes}` : ""}
  `;
}

function formatarData(dateStr) {
  if (!dateStr) return "—";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

// ===== NOVO REGISTRO =====
function novoRegistro() {
  document.querySelectorAll(".produto-card").forEach(card => {
    card.classList.remove("selecionado");
    const detalhe = card.querySelector(".produto-detalhe-input");
    if (detalhe) detalhe.style.display = "none";
    card.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
    const ta = card.querySelector("textarea");
    if (ta) ta.value = "";
  });

  document.querySelectorAll(".status-card").forEach(c => c.classList.remove("selecionado"));
  document.getElementById("grupo-retorno").style.display = "none";

  document.getElementById("clienteNome").value   = "";
  document.getElementById("clienteCodigo").value = "";
  document.getElementById("patrimonio").value    = "";
  document.getElementById("faixa").value         = "";
  document.getElementById("observacoes").value   = "";
  document.getElementById("diasRetorno").value   = "";
  document.getElementById("chk-sem-interesse").checked = false;

  atualizarSemInteresse();
  irPara(1);
}
