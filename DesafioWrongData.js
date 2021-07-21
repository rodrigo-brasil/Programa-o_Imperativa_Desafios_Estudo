// Converta o array "wrongDataFormat" para o objeto do comentário abaixo.
/*
  {
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  }
*/

const wrongDataFormat = [
    'preto-PP',
    'preto-M',
    'preto-G',
    'preto-GG',
    'preto-GG',
    'branco-PP',
    'branco-G',
    'vermelho-M',
    'azul-XG',
    'azul-XG',
    'azul-XG',
    'azul-P'
  ]
  
  const wrongDataFormatSplit = wrongDataFormat.map(value => value.split("-"))
  
  const rigthDataFormat = wrongDataFormatSplit.reduce((acc, [cor, tamanho]) => {
    acc[cor] = acc[cor] || {};
    acc[cor][tamanho] = acc[cor][tamanho] || 0;
    acc[cor][tamanho]++
    return acc
  }, {})
  
  console.log(rigthDataFormat)
  