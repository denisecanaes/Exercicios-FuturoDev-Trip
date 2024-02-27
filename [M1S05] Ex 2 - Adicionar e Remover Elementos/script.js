//Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas.
//Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

const frutas = [];
frutas[0] = prompt("Digite a primeira fruta");
frutas[1] = prompt("Digite a segunda fruta");
frutas[2] = prompt("Digite a terceira fruta");
frutas.push(prompt("Digite mais uma fruta"));
frutas.shift();
console.log("O array atualizado é: ", frutas);
