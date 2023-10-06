
const quest1 = {
  box1: ['Autoconfiante', 'Independente', 'Dominante'],
  box2: ['Comunicativo', 'Alegre', 'Extrovertido'],
  box3: ['Acolhedor', 'Amigável', 'Paciente'],
  box4: ['Autodisciplinado', 'Atento a detalhes', 'Diligente']
}

const quest2 = {
  box1: ['Pró-ativo', 'Empreendedor', 'Corajoso'],
  box2: ['Participativo', 'Relacional', 'Flexível'],
  box3: ['Agradável', 'Tranquilo', 'Organizado'],
  box4: ['Criterioso', 'Cuidadoso', 'Especialista']
}

const quest3 = {
  box1: ['Prático', 'Rápido', 'Eficiente'],
  box2: ['Persuasivo', 'Contagiante', 'Estimulador'],
  box3: ['Calmo', 'Rotineiro', 'Constante'],
  box4: ['Idealizador', 'Perfeccionista', 'Uniforme']
}

const quest4 = {
  box1: ['Objetivo', 'Assertivo', 'Focado em resultados'],
  box2: ['Preza pelo prazer', 'Emotivo', 'Divertido'],
  box3: ['Conciliador', 'Conselheiro', 'Bom ouvinte'],
  box4: ['Conforme', 'Sistemático', 'Sensato']
}

const quest5 = {
  box1: ['Determinado', 'Firme', 'Enérgico'],
  box2: ['Criativo', 'Falante', 'Distraído'],
  box3: ['Comedido', 'Amável', 'Mediador'],
  box4: ['Preciso', 'Lógico', 'Racional']
}

const quest6 = {
  box1: ['Lutador', 'Combativo', 'Agressivo'],
  box2: ['Participativo', 'Facilitador', 'Influenciador'],
  box3: ['Auto-controlado', 'Conservador', 'Responsável'],
  box4: ['Profundo', 'Perceptivo', 'Estratégico']
}

const quest7 = {
  box1: ['Automotivado', 'Pioneiro', 'Impulsionador'],
  box2: ['Articulador', 'Empolgante', 'Motivador'],
  box3: ['Persistente', 'Prevenido', 'Tolerante'],
  box4: ['Exato', 'Exigente', 'Estruturado']
}

const quest8 = {
  box1: ['Resolvedor', 'Destemido', 'Desafiador'],
  box2: ['Vaidoso', 'Simpático', 'Gosta de ser reconhecido'],
  box3: ['Aconselhador', 'Harmônico', 'Apoiador'],
  box4: ['Ponderado', 'Ordenador', 'Analisador']
}

const quest9 = {
  box1: ['Competitivo', 'Assume riscos', 'Desbravador'],
  box2: ['Entusiasmado', 'Impulsivo', 'Otimista'],
  box3: ['Moderado', 'Equilibrado', 'Estável'],
  box4: ['Teórico', 'Conservador', 'Aprofunda conhecimentos']
}

const quest10 = {
  box1: ['Direcionador', 'Solucionador', 'Empreendedor'],
  box2: ['Agregador', 'Sociabilidade', 'Mobilidade'],
  box3: ['Conciliador', 'Observador', 'Diplomata'],
  box4: ['Regulador', 'Especialista', 'Orientador']
}
//instruction box
function instructionBoxCloser(){
  document.querySelector('#instructions-box #instruction-p').classList.add("close");
  document.querySelector('#button-closer').classList.add("close");
  document.querySelector('.instruct').classList.add("instruct-closed");
}//instruct-closed  instruct
function instructionBoxOpenner(){
  document.querySelector('#instructions-box #instruction-p').classList.remove("close");
  document.querySelector('#button-closer').classList.remove("close");
  document.querySelector('.instruct').classList.remove("instruct-closed");
}
//teste

function skillSelecBox(quest, box, n) {
  console.log(quest);
  let skillSelec
  switch (box) {
    case "box1":
      skillSelec = quest.box1[n];
      console.log(skillSelec)
      break;

    case "box2":
      skillSelec = quest.box2[n];
      console.log(skillSelec)
      break;
    case "box3":
      skillSelec = quest.box3[n];
      console.log(skillSelec)
      break;
    case "box4":
      skillSelec = quest.box4[n];
      console.log(skillSelec)
      break;
  }
  return skillSelec;
}


function questTittleValue(box, skill, skillContent) {
  skill = `${box} ${skill}`;
  const skillTittle = document.querySelector(skill);
  skillTittle.textContent = skillContent;
}
function questTittleText(box, skillcontent1, skillcontent2, skillcontent3) {
  questTittleValue(box, ".skills", `${skillcontent1}, ${skillcontent2} E ${skillcontent3}`);
}
// quest = obtInfo box = array escrita entre "" questBox = Id bloco de pergunta
function changeTittle(quest, box, questBox) {
  let firstSkill = skillSelecBox(quest, box, 0);
  let secondSkill = skillSelecBox(quest, box, 1);
  let thirdSkill = skillSelecBox(quest, box, 2);
  questTittleText(questBox, firstSkill, secondSkill, thirdSkill);
}
let testN = "3";
let teste = "quest" + testN;

function changeBoxTittle(quest) {
  //changeTittle(quest1, "box2", "#question2")
  changeTittle(quest, "box1", "#question1")
  changeTittle(quest, "box2", "#question2")
  changeTittle(quest, "box3", "#question3")
  changeTittle(quest, "box4", "#question4")
}

function changeBox() {
  let arrayLength = takeLength()
  function changeButtonFuction(){
    let button = document.querySelector('#seguir');
    button.onclick = inputOptsRegister();
    resultBoxHidder();
    questBoxHidder();
    
  }
  switch (arrayLength) {
    case 0:
      changeBoxTittle(quest1)
      break;
    case 1:
      changeBoxTittle(quest2)
      break;
    case 2:
      changeBoxTittle(quest3)
      break;
    case 3:
      changeBoxTittle(quest4)
      break;
    case 4:
      changeBoxTittle(quest5)
      break;
    case 5:
      changeBoxTittle(quest6)
      break;
    case 6:
      changeBoxTittle(quest7)
      break;
    case 7:
      changeBoxTittle(quest8)
      break;
    case 8:
      changeBoxTittle(quest9)
      break;
    case 9:
      changeBoxTittle(quest10)
      break;
    case 10:
      changeButtonFuction()
      break;
    //proximo ira mudar a função do botao seguir
  }
};

//clickar no opt chosed e zerar
function optNone(optionBox) {
  let optDiv = document.querySelectorAll(optionBox);
  optDiv.forEach(function (el) {
    el.classList.add("opt-none");
  });
}

//ao selecionar um numero, deixa apenas ele visivel na linha e apaga o mesmo numero das outras linhas

const opt1 = document.querySelectorAll('.opt1');
const opt2 = document.querySelectorAll('.opt2');
const opt3 = document.querySelectorAll('.opt3');
const opt4 = document.querySelectorAll('.opt4');

function selectorVerify(box, element) {
  let classOpt = element.classList.item(0);

  optNone(`${box} .opt`);
  switch (classOpt) {
    case "opt1":
      opt1.forEach(function (el) {
        el.classList.add("opt-none");
      });
      break;
    case "opt2":
      opt2.forEach(function (el) {
        el.classList.add("opt-none");
      });
      break;
    case "opt3":
      opt3.forEach(function (el) {
        el.classList.add("opt-none");
      });
      break;
    case "opt4":
      opt4.forEach(function (el) {
        el.classList.add("opt-none");
      });
      break;
    default:
      console.log("Deu ruim");
  }
  element.classList.remove("opt-none");
}

//
function selectorVerifyChosed(element) {
  let classOpt = element.classList.item(0);

  switch (classOpt) {
    case "opt1":
      opt1.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "opt2":
      opt2.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "opt3":
      opt3.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "opt4":
      opt4.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    default:
      console.log("Deu ruim");
  }
  element.classList.remove("opt-choosed");
}
function selectorToDisplayBlock(box) {
  let optA = document.querySelectorAll('#optionsA .opt');
  let optB = document.querySelectorAll('#optionsB .opt');
  let optC = document.querySelectorAll('#optionsC .opt');
  let optD = document.querySelectorAll('#optionsD .opt');
  switch (box) {
    case "#optionsA":
      optA.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "#optionsB":
      optB.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "#optionsC":
      optC.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
    case "#optionsD":
      optD.forEach(function (el) {
        el.classList.remove("opt-none");
      });
      break;
  }
}


function optsEmpty() {
  const opts = document.querySelectorAll('.opt');
  opts.forEach(opt => {
    opt.classList.remove("opt-none");
    opt.classList.remove("opt-choosed");
    //zerar variaveis
  });
}

function optChose(box, element) {
  if (element.classList.contains("opt-choosed")) {
    selectorVerifyChosed(element);
    selectorToDisplayBlock(box);
    optsEmpty()
  } else {
    element.classList.add("opt-choosed");
    selectorVerify(box, element);

  }
};
