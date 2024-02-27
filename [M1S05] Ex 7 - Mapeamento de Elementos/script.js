// Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array
// chamado quadrados que contenha o quadrado de cada número do array numeros.
// Imprima o array quadrados no console.
// Use o método map para realizar a criação de um novo array.

const numeros = [55, 10, 35, 40, 25];
function calculoQuadrado(num1) {
  let numeroQuadrado = num1 * num1;
  return numeroQuadrado;
}
const quadrados = numeros.map(calculoQuadrado);
console.log("O quadrado dos números são: ", quadrados);
