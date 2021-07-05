let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

/* let quantidadeNomes = nomes.reduce(contarNomesRepitidos,{}); */
// quantidade de nomes:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

function contarNomesRepitidos (todos, nome) {
    if (nome in todos) {
        todos[nome]++;
    }
    else {
        todos[nome] = 1;
    }
    return todos;
  }

//   console.log(quantidadeNomes)

  function reduce2 (array, callback, valorinicial) {
      for (let index = 0; index < array.length; index++) {
        valorinicial = callback(valorinicial, array[index])
      }
      return valorinicial
  }

  //console.log(reduce2(nomes,contarNomesRepitidos,{}))


  let preco = [220,300,100,1500]

  let valorfinal = preco.map(preco => preco*1.5)

  console.log(valorfinal)