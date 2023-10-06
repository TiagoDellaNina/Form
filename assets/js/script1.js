//colocar o valor escolhido para var xOpt
let dOpt;
let iOpt;
let sOpt;
let cOpt;
let optOn;

function dTakeButtonValue(n, element, box) {
    dOpt = n;
    optChose(box, element);
    instructionBoxCloser()
  }
function iTakeButtonValue(n, element, box) {
    iOpt = n;
    optChose(box, element);
    instructionBoxCloser()
}
function sTakeButtonValue(n, element, box) {
    sOpt = n;
    optChose(box, element);
    instructionBoxCloser()
}
function cTakeButtonValue(n, element, box) {
    cOpt = n;
    optChose(box, element);
    instructionBoxCloser()
}


//Array com pontos de cara perfil
let dArray = [];
let iArray = [];
let sArray = [];
let cArray = [];
let arraySize;

let dHistory;
let iHistory;
let sHistory;
let cHistory;
//registrar historico de respostas
/*function answerHistory(optBox){
    let dValue = dArray[dArray.length - 1];
    let iValue = dArray[dArray.length - 1];
    let sValue = dArray[dArray.length - 1];
    let cValue = dArray[dArray.length - 1];
   //#optionsA .opt3
    let clickDiv = document.querySelector(`${optBox} .opt${dValue}`);
    clickDiv.click();
}*/
function historyRegister(){
    dHistory = dArray[dArray.length - 1];
    iHistory = iArray[iArray.length - 1];
    sHistory = sArray[sArray.length - 1];
    cHistory = cArray[cArray.length - 1];
}
function answerHistory(optBox, disc){

    switch (disc) {
        case 1:
            value = dHistory;
            break;
        case 2:
            value = iHistory;
            break;
        case 3:
            value = sHistory;
            break;
        case 4:
            value = cHistory;
            break;
        default:
            // Trate o caso em que disc não é um valor válido
            break;
    }

    // Resto do seu código
    //#optionsA .opt3
    let clickDiv = document.querySelector(`${optBox} .opt${value}`);
    clickDiv.click();
}

//adciona ao array de soma total
function addOptValue(){  

    dArray.push(dOpt);
    console.log(dArray);
  
    iArray.push(iOpt);
    console.log(iArray);
  
    sArray.push(sOpt);
    console.log(sArray);
  
    cArray.push(cOpt);
    console.log(cArray);
    changeBox()
    optsEmpty()
    
}
//remove o ultimo valor do array de soma total
function removeOptValue(){  
    historyRegister()
    dArray.pop(dOpt);
    console.log(dArray);
  
    iArray.pop(iOpt);
    console.log(iArray);
  
    sArray.pop(sOpt);
    console.log(sArray);
  
    cArray.pop(cOpt);
    console.log(cArray);
    changeBox()
    optsEmpty()
    if(dHistory > 0){
    answerHistory("#optionsA", 1);
    answerHistory("#optionsB", 2);
    answerHistory("#optionsC", 3);
    answerHistory("#optionsD", 4);
    } else {
        console.log("ta zerado");
    }
  

}
//pega o tamnho do array para gerenciar as perguntas 

function takeLength(){
    arraySize = dArray.length;
    return arraySize;
}




//somar array CHAMAR SEM PARAMETRO
let sums;
function sumDisc(){
    const dSum = dArray.reduce((acc, item) => {
        acc += item;
        return acc
    }, 0)

    const iSum = iArray.reduce((acc, item) => {
        acc += item;
        return acc
    }, 0)

    const sSum = sArray.reduce((acc, item) => {
        acc += item;
        return acc
    }, 0)

    const cSum = cArray.reduce((acc, item) => {
        acc += item;
        return acc
    }, 0)

    return {
        dSum: dSum,
        iSum: iSum,
        sSum: sSum,
        cSum: cSum
    };
}

function inputOptsRegister(){
    let disc1 = document.querySelector('#dSum');
    let disc2 = document.querySelector('#iSum');
    let disc3 = document.querySelector('#sSum');
    let disc4 = document.querySelector('#cSum');

    let answer1 = document.querySelector('#answer1');
    let answer2 = document.querySelector('#answer2');
    let answer3 = document.querySelector('#answer3');
    let answer4 = document.querySelector('#answer4');

    sums = sumDisc();
    disc1.value = `${sums.dSum}%`;
    disc2.value = `${sums.iSum}%`;
    disc3.value = `${sums.sSum}%`;
    disc4.value = `${sums.cSum}%`;
  

    answer1.textContent = `${sums.dSum}% Executor`;
    answer2.textContent = `${sums.iSum}% Comunicador`;
    answer3.textContent = `${sums.sSum}% Planejador`;
    answer4.textContent = `${sums.cSum}% Analista`;
    console.log('Soma de dArray:', sums.dSum);
    console.log('Soma de iArray:', sums.iSum);
    console.log('Soma de sArray:', sums.sSum);
    console.log('Soma de cArray:', sums.cSum);
}

//decidir o perfil baseado no maior valor
function verPerfil(d, i, s, c){

    let perfil;
    let perfil2;
    let respostaPerfil
    let maiorNumero;
    let maiorNumero2;

    if(d > i){
        maiorNumero = d;
        perfil = "d";
    }else{
        maiorNumero = i;
        perfil = "i";
    };

    if(s > c){
        maiorNumero2 = s;
        perfil2 = "s";
    }else{
        maiorNumero2 = c;
        perfil2 = "c";
    };

    if(maiorNumero > maiorNumero2){
        respostaPerfil = perfil;
    }else{
        respostaPerfil = perfil2;
    };
    
    return respostaPerfil;
    
};

//verificar se todas as 4 opções foram selecionadas
function selectedOptionsVerify(){
    let chosedOpt = document.querySelectorAll('.opt-choosed');
    //verificar q aquantidade de divs selecionadas
    if(chosedOpt.length === 4){
        addOptValue();
    } else {
      alert("Selecione todas as Opções");
    }
  }
