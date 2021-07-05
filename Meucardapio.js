
// Função construtora
// cardapio = [] é pro cardapio receber um valor default, se nada for inserido é criado uma array vazia isso evita erros
function restaurante(nome , cardapio = []){
    //Declarando os atributos
    this.nome = nome;
    this.cardapio = cardapio;
    //Declarando o método entrada()
    this.entrada = function (){
        // Declarando a variavel(msg) de returno do método
        let msg = ` >>>>> Bem vindo ao Restaurante ${nome} <<<<<\n Nosso cardápio:`;
        let index = 1;
        // Se nenhuma prato for adicionado no cardapio Retorna essa mensagem de aviso
        if(this.cardapio.length === 0) return msg+'\ncardápio não cadastrado!'

        // For para adicionar e formatar a mensagem com o cardapio
        for (const  prato  of this.cardapio) {
            msg += `\n${index}° ${prato}`
            index++
        }
        return msg
    }
}

// criando um novo restaurante
let rest1 = new restaurante('Bom Tempero',["Prato1","Prato2",'Prato3'])

// exibindo o resultado do método entrada()
console.log(rest1.entrada())