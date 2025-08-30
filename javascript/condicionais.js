// // Exercicio 1 

function Exercicio01 () {


let idade = prompt("Qual e a idade");

if (idade >= 18){ 

    alert("parabens ! voce e maior de idade");
} else {
    alert ("vai caga");
}

adicionar();

}


// //Exercicio 1 finalizado 



// let idade = prompt("Qual sua idade?");

// //se //se nao 
// if(idade .=18) {
//     // verdadeiro 
//     alert("voce e maior de idade!");

// } else {
//     // bloco do falso 
//     alert("va caga!");

// }

// Exercicio 2
function Exercicio02 () {

let number = prompt ("Qual o valor");

if (number >=0) {
    alert("legal voce acerto");
} else {
    alert("voce erro");
}
}

//Exercicio 3 
function Exercicio03 () {
let nota = prompt("qual a nota");

if (nota >=60) {
    alert("parabens voce esta no caminho certo");
}else {
    alert("voce ainda e novo");
}
}

//Exercicio 4 
function Exercicio04 (){

let number = prompt("Qual o numero?");


if (number > 0) {
    alert("parabens")
} else {
    if (number < 0){
        alert("negativo");
} else {
    alert("neutro");
}
}
}    

// Exercicio 5
function Exercicio05 (){

let idade = prompt("insira sua idade");

if (idade > 0 && idade <= 12) {
    alert("crianca");

} else {

    if (idade > 12 && idade <= 17) {
        alert("adolecente");

    } else {
        if (idade >= 18) {
            alert("adulto");

        }else {
            alert("idade invalida");
        }
    }
}
}

// Exercicio 6
function Exercicio06 () {

let number = prompt("insira um numero");

if (number %2 == 0) {
    alert("par correto ");
 
}else {
    alert("impar incorreta");
}
}

// Intermediario 1
function intermediario01 (){

let numero1 = Number ( prompt("insira o primeiro numero"));
let numero2 = Number (prompt("insira o segundo numero"));
let operacao = prompt("insira a operacao. exemplo: +, -, *, / ");

if (operacao == "+") {
    
    let resultado = numero1 + numero2;
    alert(resultado);
} else{

    if(operacao == "-") {
        let resultado = numero1 - numero2;
        alert(resultado);
    
    }else {

    if (operacao == "*") {
        
        let resultado = numero1 * numero2;
        alert(resultado);
    }else {
        
        if (operacao == "/") {

            let resultado = numero1 / numero2;
            alert(resultado);
        }
    }
    }    
}
}

// Exercicio 2
function intermediario02 () {

let numero1 = Number (prompt("insira o primeiro numero"));
let numero2 = Number (prompt("insira o segundo numero"));
let numero3 = Number (prompt("insira o terceiro numero"));


if (numero1 > numero2 && numero1 > numero3){
    alert(numero1);
}else {
    if (numero2 > numero1 && numero2 > numero3){
        alert(numero2);
    }else {
        if (numero3 > numero2 && numero3 > numero1){
            alert(numero3);
        }
    }        

    }
}


