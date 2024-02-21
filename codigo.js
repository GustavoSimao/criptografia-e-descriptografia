let criptografar;
let descriptografar;
let copiar;
let caracteresEspeciais;
const textArea=document.querySelector('textarea');
caracteresEspeciais=/[áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ]/;
let alterarTitulo=document.querySelector("h1");
alterarTitulo.innerHTML="Nenhuma mensagem encontrada";
let alterarParagrafo=document.querySelector('p');
alterarParagrafo.innerHTML='Digite ao lado o texto que deseja criptografar ou descriptografar';
const avisoTexto=document.getElementById('aviso');
avisoTexto.innerHTML='O texto deve conter somente letras minúsculas e sem acentos';



function limparCampo() {
    textArea;
    textArea.value='';
}

function verificarTexto() { // verifica se tem caracteres especiais e letras maiusculas e retorna cor vermelha com o intuito de se mover, mas nao funcionou o movimento
    let inputValue=textArea.value;
    let contemCaractereEspecial=caracteresEspeciais.test(inputValue);
    let contemLetraMaiuscula=/[A-Z]/.test(inputValue);

    if (contemCaractereEspecial||contemLetraMaiuscula) {
        avisoTexto.style.color = 'red';
        avisoTexto.style.animation = 'shake 0.5s infinite alternate';
        return false;
    } else {
        avisoTexto.style.color = 'black';
        avisoTexto.style.animation = 'none';
        return true;
    }
}

function verificarTextoVazio() {
    let inputValue=textArea.value;
    if (inputValue==='') {
        alterarTitulo;
        alterarParagrafo;
        return true; // Retorna true se o textarea estiver vazio
    } else {
        return false; // Retorna false se o textarea não estiver vazio
    }
}

function buttonCriptografar() {
    if (!verificarTexto()) { // Verifica se há caracteres especiais ou letras maiúsculas
        return; // Se houver, encerra a execução da função buttonCriptografar
    }
    if (verificarTextoVazio()) {
        return;
    }
    inputValue=textArea.value;
    criptografar=inputValue.replace(/(a)|(e)|(i)|(o)|(u)/gi, function(match, grupo1, grupo2, grupo3, grupo4, grupo5) {
        if (grupo1) return 'ai';
        if (grupo2) return 'enter';
        if (grupo3) return 'imes';
        if (grupo4) return 'ober';
        if (grupo5) return 'ufat';
    });
    console.log(criptografar);

    alterarParagrafo.innerHTML=criptografar;
    alterarTitulo.innerHTML=''; // está fazendo o h1 sumir quando clica em cripto
    limparCampo();
}

function buttonDecodificar() {
    if (!verificarTexto()) { 
        return; 
    }
    if (verificarTextoVazio()) {
        return;
    }
    inputValue=textArea.value;
    descriptografar=inputValue.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/gi, function(match, grupo1, grupo2, grupo3, grupo4, grupo5) {
        if (grupo1) return 'a';
        if (grupo2) return 'e';
        if (grupo3) return 'i';
        if (grupo4) return 'o';
        if (grupo5) return 'u';
    });
    console.log(descriptografar);

    alterarParagrafo.innerHTML=descriptografar;
    alterarTitulo.innerHTML='';
    limparCampo();
}


function buttonCopiar() {  // falta criar a copia da descriptografia
    copiar=criptografar;
    navigator.clipboard.writeText(criptografar);  
}

function buttonLimpar() {
    let alterarTitulo=document.querySelector("h1");
    alterarTitulo.innerHTML="Nenhuma mensagem encontrada";
    let alterarParagrafo=document.querySelector('p');
    alterarParagrafo.innerHTML='Digite ao lado o texto que deseja criptografar ou descriptografar';
}

buttonLimpar();
// navigator.clipboard.writeText(descriptografar);



