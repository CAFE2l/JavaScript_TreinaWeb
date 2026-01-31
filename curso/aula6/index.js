// Função de ordem superior (high order function)

function dobro(n){
    return n * 2;
}


function triplo(n){
    return n * 3;
}
function aplicarFuncao(funcao, n){
    return funcao(n);
}

console.log(aplicarFuncao(dobro, 5));
console.log(aplicarFuncao(triplo, 5));