// // Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos
// do array. Utilize o reduce para realizar a soma.

const numeros = [10, 25, 35, 40, 55];

function somaNumeros(total, num) {
  let soma = total + num;
  return soma;
}
let resultado = numeros.reduce(somaNumeros);
console.log("A soma de todos os elementos é: ", resultado);
