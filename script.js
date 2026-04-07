// ============================================================
// LISTA DE ASSESSORES
// ============================================================
const ASSESSORES = [
  "Adyr Nicchio Neto",
  "Adriano Morandi Rondeli",
  "Alecio Bernardino da Silva",
  "Alessandra Reis Estanislau",
  "Amanda Boaventura Xavier",
  "Amanda Martins Soares",
  "Ana Carolina Gomes dos Santos",
  "Andre Pereira da Motta",
  "Andrea de Aguiar Dias Saraiva Gomes",
  "Arthur Massucatti Rondeli",
  "Athos Fontenelle Fittipaldi",
  "Bernardo Cascao Bougleux Couto",
  "Bernardo Chalub Pereira da Costa",
  "Bruno Mansur de Mello Goncalves",
  "Bruno Matosinhos Sbraletta",
  "Bruno Moraes de Caldas",
  "Bruno Thomaz Lott",
  "Caio Cesar Silva",
  "Camila Barbosa de Souza Garcia",
  "Carlos Augusto Ribeiro Lima",
  "Cristiane Gomes Pereira",
  "Daniel de Albuquerque Cola Pim",
  "Daniel Giestas Basilio",
  "Danilo de Vellasco Villela",
  "Danilo dos Santos Chaves",
  "Danilo Weslei Moraes de Souza",
  "Darlington de Paiva Bernardes",
  "Douglas Niero",
  "Durval Alaisson da Silva Vieira",
  "Eduardo de Oliveira Santos",
  "Eduardo Depes Vergara Lopes",
  "Enzo de Andrade Dorigheto",
  "Eurico Carvalho Caldas",
  "Eustaquio Mafra",
  "Everton Santos de Sousa",
  "Fabiano Pires Vieira",
  "Fabiano Werner",
  "Fabio Saraiva Barbosa",
  "Fabricio Barbosa de Lima",
  "Fabricio Vieira Lopes",
  "Felipe Borges Santos",
  "Felipe Pinheiro Sathler",
  "Felipe Thiago Dalpra Pessoa",
  "Fernando Assuncao Miranda",
  "Filippe Fioresi Sily",
  "Flavio Goncalves Maciel de Figueiredo",
  "Francisco Felipe Avilar Teixeira",
  "Gabriel Gomes Melo Carvalho",
  "Gabriel Grillo Pansiere",
  "Giancarlo Sidoti",
  "Guilherme de Assis Colossal",
  "Guilherme Margotto Gramelich",
  "Gustavo Rodrigues Coelho",
  "Gustavo Shigueru Tayamichi Sato",
  "Henrique Galvao Colares",
  "Henrique Godinho Ruoccolo",
  "Henrique Rizzi Ferreira",
  "Henrique Stancioli Tonoli",
  "Higor Rabelo da Silva",
  "Hindenburg de Alencar Barreto Coelho Neto",
  "Ian Araujo Lopes",
  "Icaro Gabriel Valentim Cruz",
  "Icaro Fortes Ventura",
  "Igor Amado Ramos",
  "Jair Rodrigues dos Santos",
  "Jhady Cerdeira de Vasconcelos",
  "Joao Goncalves Neto",
  "Joao Lucas Silveira Dutra",
  "Joao Luiz Silva Pires",
  "Joao Pedro Cordeiro Rocha",
  "Joao Pedro Gentil Goncalves da Rocha",
  "Joao Victor Musso Gomes de Souza",
  "Joao Victor Rossoni Ronchi",
  "Joao Vitor Luchi Almeida",
  "Joao Vitor Pompermayer Vettoraci",
  "Jose Eduardo Goncalves Barros",
  "Joyce Stefanni de Sousa Rolins",
  "Julia Bortolini Lima",
  "Juliana Castro David Alves de Lima",
  "Juliana Macedo Soares Nascimento",
  "Keone Reimann Kojin",
  "Konrad Campos Salomao",
  "Leonardo Borgo Machado dos Santos",
  "Leonardo Gustavo Pastore Dyna",
  "Leticia Veras Batista",
  "Lorena Maria Stein de Siqueira Varejao",
  "Lucas Andrade Felestrino",
  "Lucas Betini Motta",
  "Lucas Carvalho Guerra",
  "Lucas Deivid de Souza Miranda",
  "Lucas de Souza Soares",
  "Luis Gustavo Rodrigues",
  "Luiz Felipe Goncalves Gava",
  "Luiz Felipe Zon Werneck Guimaraes",
  "Luiz Guilherme Beltrao Barcik",
  "Luiz Henrique Faroni Bortolon",
  "Maicon Pizzol",
  "Maira Vianna de Andrade",
  "Marcelo de Moura Rosa",
  "Marcelo Messias da Silva Costa Reis",
  "Marco Antonio Solano Salmaso",
  "Marcus Araujo Alves dos Santos",
  "Mariana Emelly da Silva Quintanilha",
  "Mateus Battella de Siqueira Simoes",
  "Mateus Dias Rios",
  "Matheus Cardoso Pimentel",
  "Matheus Menezes Machado",
  "Mauro Bueno do Nascimento",
  "Mauricio Jose Viana Real de Lemos",
  "Mayron Campi Lima Barbosa",
  "Murilo Bonfim Marques",
  "Myrna Silveira de Souza Vasconcelos",
  "Natalia Moreira Zucchi",
  "Nicholas Goncalves Camara",
  "Paloma de Lavor Lopes",
  "Patricia Trigueiro da Mota",
  "Paulo Henrique Franca da Silva",
  "Pedro Aguiar Lima",
  "Pedro Augusto Silva Machado",
  "Pedro Borges Coleta Nascimento",
  "Pedro Fajardo da Cunha",
  "Pedro Henrique da Costa Silva",
  "Pedro Henrique Moutinho Campos",
  "Pedro Henrique Scaramussa Ramos",
  "Rachel Mendonca Costa",
  "Rafael Alves de Brito Oliveira",
  "Rafael Cataldo da Costa Souza",
  "Rafael Goncalves Tome",
  "Rafael Helbourn Bastos",
  "Ramon Serrao Coser",
  "Raquel Rodrigues Pires Bermond",
  "Roberto Balarini Junior",
  "Roberto Costa Pereira",
  "Roberto Uillian da Silva",
  "Romulo Nunes Goncalves",
  "Samuel Fernando Scalise Miranda Filho",
  "Samuel Merheb Vaz Pessoa",
  "Stefan Sarkis Woelffel Furtado",
  "Tamara Danielle da Silva",
  "Teodoro Aragao da Rocha",
  "Thales Nascimento de Faria",
  "Thiago Santana de Oliveira",
  "Thiago Valencia",
  "Tiago Damasceno de Barros Morgado",
  "Vanessa dos Passos Correa",
  "Victor Felipe Oliveira Souza",
  "Victor Leal Sartorio",
  "Vinicius de Moraes Mazolini",
  "Vinicius Moraes Paris de",
  "Vinicius Saldanha Soares Pinto",
  "Virgilio Alves Lourenco Lage",
  "Vitor Capeli Pereira",
  "Vitor Augusto Madeira Gomes",
  "Vitor Giacomin Pimentel",
  "Vivian Busch",
  "Vyctor Fialho Nacarati Tavares",
  "Wagner Leon Varejao",
  "Walace Silva de Souza",
  "Wesley da Silva Feitosa",
  "Willian de Angeli Prata",
  "Yago Loureiro Comerio"
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let dadosFormulario = {
  assessor: "",
  dataFp: "",
  clienteNome: "",
  clienteCodigo: "",
  patrimonio: "",
  faixa: "",
  produtos: [],        // [{ nome, detalhe }]
  status: "",
  diasRetorno: "",
  observacoes: ""
};

// ============================================================
// INICIALIZAÇÃO
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
  popularAssessores();
  definirDataHoje();
});

function popularAssessores() {
  const select = document.getElementById("assessor");
  ASSESSORES.forEach(nome => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    select.appendChild(option);
  });
}

function definirDataHoje() {
  const hoje = new Date().toISOString().split("T")[0];
  document.getElementById("dataFp").value = hoje;
}

// ============================================================
// NAVEGAÇÃO ENTRE ETAPAS
// ============================================================
function irPara(etapa) {
  // Valida antes de avançar
  if (etapa === 2 && !validarEtapa1()) return;
  if (etapa === 3 && !validarEtapa2()) return;
  if (etapa === 4 && !validarEtapa3()) return;

  // Salva dados da etapa atual
  coletarDados();

  // Troca a tela
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`step-${etapa}`).classList.add("active");

  // Atualiza indicador de etapa (step 5 = sucesso, não conta)
  const totalEtapas = 4;
  const etapaExibida = Math.min(etapa, totalEtapas);
  document.getElementById("step-indicator").textContent = `Etapa ${etapaExibida} de ${totalEtapas}`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// VALIDAÇÕES
// ============================================================
function validarEtapa1() {
  const assessor = document.getElementById("assessor").value;
  const dataFp   = document.getElementById("dataFp").value;
  if (!assessor) { alert("Selecione o assessor responsável."); return false; }
  if (!dataFp)   { alert("Informe a data do FP."); return false; }
  return true;
}

function validarEtapa2() {
  const nome      = document.getElementById("clienteNome").value.trim();
  const codigo    = document.getElementById("clienteCodigo").value.trim();
  const patrimonio = document.getElementById("patrimonio").value;
  const faixa     = document.getElementById("faixa").value;
  if (!nome)       { alert("Informe o nome do cliente."); return false; }
  if (!codigo)     { alert("Informe o código XP."); return false; }
  if (!patrimonio) { alert("Informe o patrimônio aproximado."); return false; }
  if (!faixa)      { alert("Selecione a faixa."); return false; }
  return true;
}

function validarEtapa3() {
  const selecionados = document.querySelectorAll(".produto-card.selecionado");
  if (selecionados.length === 0) {
    alert("Selecione pelo menos um produto com oportunidade.");
    return false;
  }
  return true;
}

// ============================================================
// COLETA DE DADOS (chamado ao navegar)
// ============================================================
function coletarDados() {
  dadosFormulario.assessor     = document.getElementById("assessor").value;
  dadosFormulario.dataFp       = document.getElementById("dataFp").value;
  dadosFormulario.clienteNome  = document.getElementById("clienteNome").value.trim();
  dadosFormulario.clienteCodigo = document.getElementById("clienteCodigo").value.trim();
  dadosFormulario.patrimonio   = document.getElementById("patrimonio").value;
  dadosFormulario.faixa        = document.getElementById("faixa").value;
  dadosFormulario.observacoes  = document.getElementById("observacoes").value.trim();

  // Coleta produtos selecionados + detalhes
  dadosFormulario.produtos = [];
  document.querySelectorAll(".produto-card.selecionado").forEach(card => {
    const nome    = card.getAttribute("data-produto");
    const textarea = card.querySelector("textarea");
    const detalhe = textarea ? textarea.value.trim() : "";
    dadosFormulario.produtos.push({ nome, detalhe });
  });
}

// ============================================================
// PRODUTOS — TOGGLE
// ============================================================
function toggleProduto(card) {
  card.classList.toggle("selecionado");
  const detalheInput = card.querySelector(".produto-detalhe-input");
  if (detalheInput) {
    detalheInput.style.display = card.classList.contains("selecionado") ? "block" : "none";
  }
}

// ============================================================
// STATUS — SELEÇÃO
// ============================================================
function selecionarStatus(card) {
  document.querySelectorAll(".status-card").forEach(c => c.classList.remove("selecionado"));
  card.classList.add("selecionado");
  dadosFormulario.status = card.getAttribute("data-status");

  // Mostra campo de retorno apenas para "Em análise"
  const grupoRetorno = document.getElementById("grupo-retorno");
  grupoRetorno.style.display = dadosFormulario.status === "Em análise" ? "block" : "none";
}

// ============================================================
// ENVIO DO FORMULÁRIO
// ============================================================
function enviarFormulario() {
  // Valida status
  if (!dadosFormulario.status) {
    alert("Selecione o status do cliente.");
    return;
  }

  // Coleta dados finais
  coletarDados();
  dadosFormulario.diasRetorno = document.getElementById("diasRetorno").value;

  // Mostra loading
  document.getElementById("loading-overlay").style.display = "flex";

  // Monta payload para o Google Apps Script
  const payload = {
    assessor:      dadosFormulario.assessor,
    dataFp:        dadosFormulario.dataFp,
    clienteNome:   dadosFormulario.clienteNome,
    clienteCodigo: dadosFormulario.clienteCodigo,
    patrimonio:    dadosFormulario.patrimonio,
    faixa:         dadosFormulario.faixa,
    produtos:      dadosFormulario.produtos.map(p => p.nome).join(", "),
    detalhes:      dadosFormulario.produtos.map(p => `${p.nome}: ${p.detalhe}`).join(" | "),
    status:        dadosFormulario.status,
    diasRetorno:   dadosFormulario.diasRetorno,
    observacoes:   dadosFormulario.observacoes
  };

  // ⚠️ Substitua pela URL do seu Google Apps Script
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/SEU_ID_AQUI/exec";

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    document.getElementById("loading-overlay").style.display = "none";
    exibirSucesso();
  })
  .catch(() => {
    document.getElementById("loading-overlay").style.display = "none";
    alert("Erro ao salvar. Verifique sua conexão e tente novamente.");
  });
}

// ============================================================
// TELA DE SUCESSO — RESUMO
// ============================================================
function exibirSucesso() {
  const produtos = dadosFormulario.produtos.map(p => `• ${p.nome}`).join("<br>");

  document.getElementById("resumo-box").innerHTML = `
    <p><strong>Assessor:</strong> ${dadosFormulario.assessor}</p>
    <p><strong>Data:</strong> ${formatarData(dadosFormulario.dataFp)}</p>
    <p><strong>Cliente:</strong> ${dadosFormulario.clienteNome} (${dadosFormulario.clienteCodigo})</p>
    <p><strong>Patrimônio:</strong> ${formatarMoeda(dadosFormulario.patrimonio)}</p>
    <p><strong>Faixa:</strong> ${dadosFormulario.faixa}</p>
    <p><strong>Produtos:</strong><br>${produtos}</p>
    <p><strong>Status:</strong> ${dadosFormulario.status}</p>
    ${dadosFormulario.diasRetorno ? `<p><strong>Retorno em:</strong> ${dadosFormulario.diasRetorno} dias</p>` : ""}
    ${dadosFormulario.observacoes ? `<p><strong>Obs:</strong>
