//Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

function parOuImpar(numero) {
  var resto = numero % 2;
  if (resto == 1) return "impar";
  else return "par";
}
