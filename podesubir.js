/* 
    aula 02/06/2021     microdesafios
*/

/* Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */

function podeSubir(altura , acompanhada){
    if(altura > 1.4 && altura <= 2) console.log(true);
    else if(altura >= 1.2 && acompanhada == true) console.log(true);
    else console.log(false);
}

podeSubir(1.4 , false)

/* Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado.” */

function podeSubir2(altura , acompanhada){
    if(altura >= 1.4 && altura < 2) console.log("Acesso autorizado");
    else if(altura < 1.4 && altura >= 1.2 && acompanhada == true) console.log("Acesso autorizado somente com acompanhante");
    else console.log("Acesso negado");
}

//podeSubir2(1.2 , false)


/* Crie um algoritmo utilizando switch que receba uma string e tenha 5 situações:

Situação 1 – Caso na string esteja escrito “Verão”, deve exibir no console a mensagem: “Que calor hein?!”.

Situação 2 – Caso na string esteja escrito “Inverno”, deve exibir no console a mensagem: “Frio dms!”.

Situação 3 – Caso na string esteja escrito “Outono”, deve exibir no console a mensagem: “É a estação em que as folhas caem”.

Situação 4 – Caso na string esteja escrito “Primavera”, deve exibir no console a mensagem: “O momento em que as flores crescem”. */

let situacao1 = "Verão"
let situacao2 = "Inverno"
let situacao3 = "Outono"
let situacao4 = "Primavera"

function switchSituacao(situacao){
    switch (situacao) {
        case "Verão":
            console.log("Que calor hein?!")
            break;
        case "Inverno":
            console.log("Frio dms!")
            break;
        case "Outono":
            console.log("É a estação em que as folhas caem")
            break;
        case "Primavera":
            console.log("O momento em que as flores crescem")
            break;
        default:
            console.log("Ops, estação inválida")
            break;
    }
}


/* switchSituacao(situacao1)
switchSituacao(situacao2)
switchSituacao(situacao3)
switchSituacao(situacao4) */