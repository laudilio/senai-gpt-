function demofilter () {

    const numeros = [1, 2, 3, 4, 5, 6]; // arraia == lista

    let numerosfiltrados = numeros.filter(numero => numero > 2);
    
    console. log (numerosfiltrados);

}

function demofind () {

    let produtos = [{

        id: "1",
        nome: "teclado",
        preco: 100 
    },
    {
        id: "2",
        nome: "mouse",
        preco: 50
    },
    {
        id: "3",
        nome: "monitor",
        preco: 700 
    }];

    let produtoCaro = produtos.find(produto => produto.preco == 700);
    console.log(produtoCaro); 
}

const demoMap = () => {

    const numeros = [1, 2, 3, 4, 5];

    let numerosDobrados = numeros.map(numero => numero * 2);

    console.log(numerosDobrados);

}
