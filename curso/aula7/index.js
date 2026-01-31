let i = 0;

function main(){
    if(i === 1000){
        return;
    }
    console.log("Executou main: ", i++);
    main();
}

main();