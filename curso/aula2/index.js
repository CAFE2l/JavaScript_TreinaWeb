// function soma(a, b){
//     console.log(a + b);
    
//     // return undefined;
// }

// const resultado = soma(5, 1);


// console.log(resultado);


// Retornando um valor simples: 
// function soma(a,b){
//     console.log(a + b);
//     return a + b ;
// }

// const resultad = soma(5, 10);
// console.log(resultad);

// Retornando um arrays 

// function criarPessoa(nome, idade){
//     return [nome, idade]
// }


// const [nome, idade] = criarPessoa('Ariel', 29);
// console.log(nome, idade);

// Retornando um objeto

// function criarPessoa(nome, idade){
//     const data = {
//         nome, 
//         idade
//     }

//     return data
// }


// const {nome, idade} = criarPessoa('Ariel', 29);
// console.log(nome, idade);



// Retornando um função

function criarPessoa(nome, idade){
    function myFunction(){
        return `${nome} tem ${idade} anos`;
    }

    return myFunction
}


const myFunction = criarPessoa('Ariel', 29);
console.log(myFunction());
