function multiplicador(a,b){
    return function(b){
        return a * b;
    };
}


console.log(multiplicador(5)(10));