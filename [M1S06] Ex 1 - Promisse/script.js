// Construa uma função que irá verificar se um valor passado pelo parâmetro é par.
// Construa as validações dentro de uma promise para que caso seja uma par retorne
// para o then a mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch a mensagem:
// “Error: número informado é impar”.

function numeroPar(num1) {
  if (num1 % 2 == 0) return true;
}

let valor = 6;

let promise = new Promise((resolve, reject) => {
  if (numeroPar(valor)) {
    resolve("Resolve");
  } else {
    reject("Reject");
  }
});

promise
  .then((message) => {
    console.log("Número validado é par. " + message);
  })
  .catch((err) => {
    console.log("Error: número informado é impar. " + err);
  });
