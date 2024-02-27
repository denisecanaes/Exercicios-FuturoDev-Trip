//Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima.
//Esta função deve simular uma operação de adição, onde os dois números são somados.
//Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.

//OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro.

function adicao(num1, num2, mostrarTela) {
  var soma = 0;
  soma = num1 + num2;
  mostrarTela(soma);
}

adicao(5, 10, function (valor) {
  console.log(valor);
});
