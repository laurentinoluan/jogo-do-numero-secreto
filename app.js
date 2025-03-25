// let titulo = document.querySelector("h1");
// titulo.innerHTML =  "Jogo do número secreto";

// let paragrafo = document.querySelector ("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicio() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicio();

function verificarChute() {
    let chute = document.querySelector ("input") .value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ("h1", "Você errou :(");
            exibirTextoNaTela ("p", "O número secreto é menor que o chute");
        }  else {
            exibirTextoNaTela ("h1", "Você errou :(");
            exibirTextoNaTela ("p", "O número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length
   
   if (quantidadeElementosNaLista == numeroEscolhido) {
    listaDeNumerosSorteados = [];
}
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio ();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector ("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicio();
    document.getElementById("reiniciar").setAttribute("disabled, true")
}

// boolean = false or true
// string = texto
// number = numero