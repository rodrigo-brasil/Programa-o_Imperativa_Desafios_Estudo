// requirindo modulos alunos é função construtora de aluno e listaAlunos é um array com alguns alunos já criado
const { alunos, listaAlunos } = require('./Alunos');

//criando novos alunos usando a função construtora
const alunoNovo = new alunos("Danilo", 10, [10, 3, 6]);
const alunoNovo2 = new alunos("Fernado", 2, [6, 8, 1]);
const alunoNovo3 = new alunos("André", 0, [8, 9, 3]);

//Passo 3 criando o objeto curso e seus métodos
const curso = {
    nome_curso: "Programação Imperativa",
    nota_aprovacao: 6,
    max_faltas: 2,
    estudantes: [],
    //Passo 4 método para adicionar alunos na lista estudantes
    addAluno: function (...aluno) {this.estudantes.push(...aluno.flat(Infinity)) },
    //Passo 5 método para saber se aluno está aprovado
    estaAprovado: function (aluno) {
        let result = (aluno.calcularMedia() >= this.nota_aprovacao && aluno.qtd_faltas < this.max_faltas) ? true : (aluno.qtd_faltas == this.max_faltas && aluno.calcularMedia() > this.nota_aprovacao * 1.1) ? true : false;
        return result
    },
    //Passo 6 listar se estudantes estão aprovado ou não ( True = aprovado , False = Reprovado)
    listarAprovacao: function (){
        //Modo avançado obj com nome e boolean se ta aprovado ou não
       return this.estudantes.reduce((acc,val) => {
            acc[val.nome] = this.estaAprovado(val);
            return acc;
        },{})

        //Apenas array com boolean se ta aprovado ou não
       // return this.estudantes.map(x=>this.estaAprovado(x))
    }
}

console.log(curso.estaAprovado(alunoNovo));

// Passo 7 addicionando alunos  e listando aprovação
curso.addAluno(listaAlunos); // adicionando pela lista do modulo
curso.addAluno(alunoNovo,alunoNovo2,alunoNovo3); // adicionando pelos alunos criados 
console.log(curso.listarAprovacao()); // listando aprovação dos alunos

