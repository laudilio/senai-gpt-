// console.log("FOR");

// for (let iterator = 1; iterator <=5; iterator++){

//     console.log(iterator);

// }

// console.log("WHILE");

// let iteratorwhile = 1;

// while (iteratorwhile <= 5){

//     console.log(iteratorwhile);

//     iteratorwhile++;

// }

// console.log("DO WHILE SIMPLES");

// do {

//     console.log("Mostrou o valor na tela , ainda que a condicao seja falsa");

//     while (1 == 2);
// }


// console.log ("FOR");

// for (let iterator = 1; iterator<=10; iterator++){

//     console.log(iterator);
// }

// let numero=prompt("digite o numero");

//     for (let iterator =1; iterator<=10; iterator++){
    
//     console.log(numero+"*"+iterator+"="+(numero*iterator));

// }


let numero=Number(prompt("digite o numero"));
let soma = 0;

for (let iterator=1; iterator<= numero; iterator++) {

    soma = soma+iterator;
}
console.log(soma);
