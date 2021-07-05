/* Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores.
 */
function calcularIndiceDeMassaCorporal(altura , peso){
    altura = altura/100;
    return console.log('Seu imc é '+ (peso/Math.pow(altura,2)))
}

/* Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora: */

function soma(a,b){
    return console.log(a+b)
}

function subtracao(a,b){
    return console.log(a-b)
}

function multiplicacao(a,b){
    return console.log(a*b)
}
function divisao(a,b){
    return console.log(a/b)
}

/* Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado. */
let nomeJogador = 'jogador'
let golsJogador = 0
let precoEmDolares = 100000
function fazerGol(){
    golsJogador++
    precoEmDolares+=10000
    console.log('GOL!!!!!!!!!')
}

fazerGol()
fazerGol()
fazerGol()
console.log(`${nomeJogador} fez ${golsJogador} gols e vale ${precoEmDolares}`)

/* Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual. */
function hatTrick(){
    for (let i = 0; i < 3; i++) {
        fazerGol()        
    }
    precoEmDolares*= 1.1
}
hatTrick()
console.log(`${nomeJogador} fez ${golsJogador} gols e vale ${precoEmDolares}`)