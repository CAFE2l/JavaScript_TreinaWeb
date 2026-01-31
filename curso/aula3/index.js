//funções auto executaveis


( async (idade) => {
    let nome = 'ariel';
    console.log('Olá', nome, "sua idade é ", idade);

    const resultado = await Promise.resolve('promise resolvida');
    console.log("Executou", resultado);
})(29)