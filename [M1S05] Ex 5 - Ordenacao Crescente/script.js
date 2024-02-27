// Crie um novo array chamado numerosOrdenados contendo os mesmos números
// do array numeros.
// Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const numerosOrdenados = [55, 10, 35, 40, 25];

function numerosSorteados(num1, num2) {
  let sorteados = num1 - num2;
  return sorteados;
}
let resultado = numerosOrdenados.sort(numerosSorteados);
console.log("Os números ordenados são: ", resultado);
