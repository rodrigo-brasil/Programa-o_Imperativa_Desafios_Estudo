function calcularTabuada(valor){
    if(valor>0){
        console.log(`Tabuada do ${valor}`)
        for (let  i = 1; i <= 10; i++) {
            let mult = valor*i;
            console.log(`${valor}x${i} = ${mult}`)
        }
        return calcularTabuada(valor-1)
    }   
}

calcularTabuada(1)