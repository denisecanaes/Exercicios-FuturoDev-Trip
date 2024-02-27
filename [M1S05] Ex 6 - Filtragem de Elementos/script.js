// Crie um array chamado pares que contenha apenas os números pares do array numeros
// criado nos exercícios anteriores. Em seguida, imprima esse novo array no console.
// Utilize o método filter para realizar a operação de filtragem.

const numeros = [55, 10, 35, 40, 25];

function numeroPar(num1) {
  if (num1 % 2 == 0) return true;
}
const pares = numeros.filter(numeroPar);
console.log("Os números pares são: ", pares);
