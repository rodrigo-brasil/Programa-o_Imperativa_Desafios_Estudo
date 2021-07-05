//Passo 1 criando a função construtora alunos ( nome = string , qtd_faltas = number , notas = Array[number])
const alunos = function criarAlunos(nome, qtd_faltas, notas) {
    this.nome = nome;
    this.qtd_faltas = qtd_faltas;
    this.notas = notas;
    //Passo 2 Método calcularMedia que retorna a média de suas notas
    this.calcularMedia = () => (this.notas.reduce((total, nota) => total + nota) / this.notas.length).toFixed(2);
    //Passo 2 Método chamado faltas, que simplesmente aumenta o número de faltas em 1
    this.faltas = () => this.qtd_faltas++;
    
    this.toString = function () {
        return `${this.nome} | ${this.qtd_faltas} | ${this.calcularMedia()}`;
    }
}
 
const aluno1 = new alunos("Maria", 10, [10, 3, 6]);
const aluno2 = new alunos("João", 2, [6, 6, 6]);
const aluno3 = new alunos("Rodrigo", 0, [10, 9, 3]);
const aluno4 = new alunos("José", 1, [2, 9, 3]);
const aluno5 = new alunos("Felipe", 2, [10, 9, 3]);

//
const listaAlunos = [aluno1, aluno2,aluno3, aluno4,aluno5]

module.exports ={
    alunos,
    listaAlunos
}

















/* exports.curso = function (nome_curso, nota_aprovacao, max_faltas, estudantes) {
    const arrayEstudantes = estudantes;
    this.nome_curso = nome_curso;
    this.nota_aprovacao = nota_aprovacao;
    this.max_faltas = max_faltas;
    this.estudantes = arrayEstudantes.toString();
    this.addAluno = (aluno) => this.estudantes.push(aluno);
    this.estaAprovado = (aluno) => { (aluno.calcularMedia() >= this.nota_aprovacao && aluno.qtd_faltas < this.max_faltas) ? true : false }
}
 */