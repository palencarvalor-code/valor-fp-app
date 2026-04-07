// ============================================================
// LISTA DE ASSESSORES
// ============================================================
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

// ============================================================
// URL GOOGLE APPS SCRIPT
// ============================================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMezU0QgO_TFRI--YUdgyR7-jphvoqlcsNdNuZjasvBm6B5TgpMXVTC3RubJZGecah/exec";

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
  produtos: [],
  status: "",
  diasRetorno: "",
  observacoes: ""
};

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  popularAssessores();
  definirDataHoje();
});

function popularAssessores() {
  var select = document.getElementById("assessor");
  if (!select) {
    console.error("ERRO: elemento #assessor não encontrado!");
    return;
  }
  ASSESSORES.forEach(function (nome) {
    var option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    select.appendChild(option);
  });
  console.log("Assessores carregados:", ASSESSORES.length);
}

function definirDataHoje() {
  var hoje = new Date().toISOString().split("T")[0];
  var campo = document.getElementById("dataFp");
  if (campo) campo.value = hoje;
}

// ============================================================
// NAVEGAÇÃO
// ============================================================
function irPara(etapa) {
  if (etapa === 2 && !validarEtapa1()) return;
  if (etapa === 3 && !validarEtapa2()) return;
  if (etapa === 4 && !validarEtapa3()) return;

  coletarDados();

  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });

  var tela = document.getElementById("step-" + etapa);
  if (tela) tela.classList.add("active");

  var indicador = document.getElementById("step-indicator");
  if (indicador) {
    var label = etapa <= 4 ? ("Etapa " + etapa + " de 4") : "Concluído ✓";
    indicador.textContent = label;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// VALIDAÇÕES
// ============================================================
function validarEtapa1() {
  var assessor = document.getElementById("assessor").value;
  var dataFp   = document.getElementById("dataFp").value;
  if (!assessor) { alert("Selecione o assessor responsável."); return false; }
  if (!dataFp)   { alert("Informe a data do FP."); return false; }
  return true;
}

function validarEtapa2() {
  var nome       = document.getElementById("clienteNome").value.trim();
  var codigo     = document.getElementById("clienteCodigo").value.trim();
  var patrimonio = document.getElementById("patrimonio").value;
  var faixa      = document.getElementById("faixa").value;
  if (!nome)       { alert("Informe o nome do cliente."); return false; }
  if (!codigo)     { alert("Informe o código XP."); return false; }
  if (!patrimonio) { alert("Informe o patrimônio aproximado."); return false; }
  if (!faixa)      { alert("Selecione a faixa."); return false; }
  return true;
}

function validarEtapa3() {
  var selecionados = document.querySelectorAll(".produto-card.selecionado");
  if (selecionados.length === 0) {
    alert("Selecione pelo menos um produto com oportunidade.");
    return false;
  }
  return true;
}

// ============================================================
// COLETA DE DADOS
// ============================================================
function coletarDados() {
  dadosFormulario.assessor      = document.getElementById("assessor").value;
  dadosFormulario.dataFp        = document.getElementById("dataFp").value;
  dadosFormulario.clienteNome   = document.getElementById("clienteNome").value.trim();
  dadosFormulario.clienteCodigo = document.getElementById("clienteCodigo").value.trim();
  dadosFormulario.patrimonio    = document.getElementById("patrimonio").value;
  dadosFormulario.faixa         = document.getElementById("faixa").value;
  dadosFormulario.observacoes   = document.getElementById("observacoes").value.trim();

  dadosFormulario.produtos = [];
  document.querySelectorAll(".produto-card.selecionado").forEach(function (card) {
    var nome     = card.getAttribute("data-produto");
    var textarea = card.querySelector("textarea");
    var detalhe  = textarea ? textarea.value.trim() : "";
    dadosFormulario.produtos.push({ nome: nome, detalhe: detalhe });
  });
}

// ============================================================
// PRODUTOS — TOGGLE
// ============================================================
function toggleProduto(card) {
  card.classList.toggle("selecionado");
  var detalheInput = card.querySelector(".produto-detalhe-input");
  if (detalheInput) {
    detalheInput.style.display = card.classList.contains("selecionado") ? "block" : "none";
  }
}

// ============================================================
// STATUS — SELEÇÃO
// ============================================================
function selecionarStatus(card) {
  document.querySelectorAll(".status-card").forEach(function (c) {
    c.classList.remove("selecionado");
  });
  card.classList.add("selecionado");
  dadosFormulario.status = card.getAttribute("data-status");

  var grupoRetorno = document.getElementById("grupo-retorno");
  if (grupoRetorno) {
    grupoRetorno.style.display = dadosFormulario.status === "Em análise" ? "block" : "none";
  }
}

// ============================================================
// ENVIO
// ============================================================
function enviarFormulario() {
  if (!dadosFormulario.status) {
    alert("Selecione o status do cliente.");
    return;
  }

  coletarDados();
  dadosFormulario.diasRetorno = document.getElementById("diasRetorno").value;

  var overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "flex";

  var payload = {
    assessor:      dadosFormulario.assessor,
    dataFp:        dadosFormulario.dataFp,
    clienteNome:   dadosFormulario.clienteNome,
    clienteCodigo: dadosFormulario.clienteCodigo,
    patrimonio:    dadosFormulario.patrimonio,
    faixa:         dadosFormulario.faixa,
    produtos:      dadosFormulario.produtos.map(function(p){ return p.nome; }).join(", "),
    detalhes:      dadosFormulario.produtos.map(function(p){ return p.nome + ": " + p.detalhe; }).join(" | "),
    status:        dadosFormulario.status,
    diasRetorno:   dadosFormulario.diasRetorno,
    observacoes:   dadosFormulario.observacoes
  };

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(function () {
    if (overlay) overlay.style.display = "none";
    exibirSucesso();
  })
  .catch(function () {
    if (overlay) overlay.style.display = "none";
    alert("Erro ao salvar. Verifique sua conexão e tente novamente.");
  });
}

// ============================================================
// SUCESSO
// ============================================================
function exibirSucesso() {
  var produtos = dadosFormulario.produtos.map(function(p){ return "• " + p.nome; }).join("<br>");

  var resumo = document.getElementById("resumo-box");
  if (resumo) {
    resumo.innerHTML =
      "<p><strong>Assessor:</strong> " + dadosFormulario.assessor + "</p>" +
      "<p><strong>Data:</strong> " + formatarData(dadosFormulario.dataFp) + "</p>" +
      "<p><strong>Cliente:</strong> " + dadosFormulario.clienteNome + " (" + dadosFormulario.clienteCodigo + ")</p>" +
      "<p><strong>Patrimônio:</strong> " + formatarMoeda(dadosFormulario.patrimonio) + "</p>" +
      "<p><strong>Faixa:</strong> " + dadosFormulario.faixa + "</p>" +
      "<p><strong>Produtos:</strong><br>" + produtos + "</p>" +
      "<p><strong>Status:</strong> " + dadosFormulario.status + "</p>" +
      (dadosFormulario.diasRetorno ? "<p><strong>Retorno em:</strong> " + dadosFormulario.diasRetorno + " dias</p>" : "") +
      (dadosFormulario.observacoes ? "<p><strong>Obs:</strong> " + dadosFormulario.observacoes + "</p>" : "");
  }

  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });

  var step5 = document.getElementById("step-5");
  if (step5) step5.classList.add("active");

  var indicador = document.getElementById("step-indicator");
  if (indicador) indicador.textContent = "Concluído ✓";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// NOVO REGISTRO — RESET
// ============================================================
function novoRegistro() {
  dadosFormulario = {
    assessor: "", dataFp: "", clienteNome: "", clienteCodigo: "",
    patrimonio: "", faixa: "", produtos: [], status: "", diasRetorno: "", observacoes: ""
  };

  document.getElementById("assessor").value      = "";
  document.getElementById("clienteNome").value   = "";
  document.getElementById("clienteCodigo").value = "";
  document.getElementById("patrimonio").value    = "";
  document.getElementById("faixa").value         = "";
  document.getElementById("observacoes").value   = "";
  document.getElementById("diasRetorno").value   = "";

  var grupoRetorno = document.getElementById("grupo-retorno");
  if (grupoRetorno) grupoRetorno.style.display = "none";

  definirDataHoje();

  document.querySelectorAll(".produto-card").forEach(function (card) {
    card.classList.remove("selecionado");
    var detalheInput = card.querySelector(".produto-detalhe-input");
    if (detalheInput) {
      detalheInput.style.display = "none";
      var ta = detalheInput.querySelector("textarea");
      if (ta) ta.value = "";
    }
  });

  document.querySelectorAll(".status-card").forEach(function (c) {
    c.classList.remove("selecionado");
  });

  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });

  var step1 = document.getElementById("step-1");
  if (step1) step1.classList.add("active");

  var indicador = document.getElementById("step-indicator");
  if (indicador) indicador.textContent = "Etapa 1 de 4";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// UTILITÁRIOS
// ============================================================
function formatarData(dataISO) {
  if (!dataISO) return "";
  var partes = dataISO.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function formatarMoeda(valor) {
  if (!valor) return "";
  return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
