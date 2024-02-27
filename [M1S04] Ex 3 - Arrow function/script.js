//Crie uma arrow function que recebe um array de números e calcula a média deles.

//OBS: para pegar o tamanho de um array use nomeDoArray.length
/*
function calculoMedia(numeros) {
  var tamanho = 0;
  tamanho = numeros.length;
  var soma = 0;
  for (let contador = 0; contador < tamanho; contador++) {
    soma = numeros[contador] + soma;
  }
  var media = soma / tamanho;
  return media;
}
*/

const calculoMedia = (numeros) => {
  var tamanho = 0;
  tamanho = numeros.length;
  var soma = 0;
  for (let contador = 0; contador < tamanho; contador++) {
    soma = numeros[contador] + soma;
  }
  var media = soma / tamanho;
  return media;
};
