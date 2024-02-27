//Crie um array chamado numeros contendo cinco números inteiros.
//Utilize um loop for para imprimir cada número do array no console.

//Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = required("prompt-sync");

const numeros = [10, 25, 35, 40, 55];
for (let posicaoArray = 0; posicaoArray < 5; posicaoArray++) {
  console.log(numeros[posicaoArray]);
}

const soma = numeros.reduce((acumulador, numeroAtual) => {});
