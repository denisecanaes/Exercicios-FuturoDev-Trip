//Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação
//da série "Stranger Things”, será apenas aceita três tipos de avaliação: ruim, bom e excelente.
//Depois verifique quantas pessoas classificaram a série como ruim.

let contadorRuim = 0;
let contadorBom = 0;
let contadorExcelente = 0;
let contador = 0;

while (contador < 4) {
  let avaliacao = prompt(
    "Qual a sua avaliação para a série 'Stranger Things'? (ruim, bom, excelente)"
  );

  if (avaliacao.toLowerCase() === "ruim") {
    contadorRuim++;
  } else if (avaliacao.toLowerCase() === "bom") {
    contadorBom++;
  } else if (avaliacao.toLowerCase() === "excelente") {
    contadorExcelente++;
  }

  contador++;
}

console.log("Votos com classificação ruim: ", contadorRuim);
console.log("Votos com classificação bom: ", contadorBom);
console.log("Votos com classificação excelente: ", contadorExcelente);
