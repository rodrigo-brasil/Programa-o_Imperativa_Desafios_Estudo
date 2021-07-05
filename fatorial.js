function fatorialFor(numero) {
  let resultado = numero;
  while (numero > 1) {
    resultado *= --numero;
  }
  return resultado;
}

console.log(fatorialFor(4));

function fatorialRecursivo(numero) {
  let resultado = numero;
  if (numero <= 1) return resultado;
  return (resultado *= fatorialRecursivo(numero - 1));
}

console.log(fatorialRecursivo(4));
