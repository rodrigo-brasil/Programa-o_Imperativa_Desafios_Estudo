
function fibonacci(n){
    if(n === 0){
        resultado.push(0)
        return 0
    }

    if(n === 1){
         resultado.push(1)
         return 1
    }

     return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(8))
console.log(resultado)
