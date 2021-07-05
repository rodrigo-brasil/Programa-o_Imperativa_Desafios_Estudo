let contarValores = (arr) => arr.reduce(contarNomesRepitidos,{});

function contarNomesRepitidos (todos, nome) {
    if (nome in todos) {
        todos[nome]++;
    }
    else {
        todos[nome] = 1;
    }
    return todos;
  }

  module.exports ={contarValores} 

