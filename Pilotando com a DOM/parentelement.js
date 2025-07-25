//COM O parentNode E O parentElement CONSIGO VER QUEM É O PAI DOS ELEMENTOS//

const body = document.querySelector("body");

console.log(body.parentNode);

const element = document.querySelector("h1");

console.log(element.parentElement);


//Buscando irmãos//
const el = document.querySelector("body script");

console.log(el.nextSibling) //PEGA PRÓXIMO IRMÃO É UM TEXTO POR CAUSA DO ESPAÇO VAZIO//
console.log(el.nextElementSibling) //PEGA O IRMÃO DA TAG HEADER//
console.log(el.previousSibling) //PEGA O IRMÃO QUE SERÁ UM TEXTO//
console.log(el.previousElementSibling) //PEGA O IRMÃO DO BODY E DO SCRIPT//

//Criando e adicionando elementos na página//
const div = document.createElement("div")       //AQUI EU TENHO UMA DIV CRIADA MAS COM NADA DENTRO DELA//
div.innerText = "Olá Devs!"

const header = document.querySelector("header");
header.append(div)                                 //EU COLOCO MINHA DIV CRIADA NO FINAL DO HEADER//
header.prepend(div)                                //EU COLOCO MINHA DIV CRIADA NO INICIO DO HEADER//

//Eventos de teclado//
const input = document.querySelector("input")

input.onkeyup = function() {                 //O onkeydown VAI FAZER COM QUE CADA CARACTER SEJA ESCREVIDO NO INPUT,ELE APAREÇA A MENSAGEM NO CONSOLE//
    console.log("rodei");                    //O onkeyup VAI FAZER COM QUALQUER TECLA DO MEU TECLADO APAREÇA A MENSAGEM NO CONSOLE//  
}

/*
const h1 = document.querySelector("h1");
h1.addEventListener("click" , print);

function print() {
    console.log("print");
} 
*/