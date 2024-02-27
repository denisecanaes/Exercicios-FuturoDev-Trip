//Você foi contratado por um supermercado para catalogar a compra de uma cliente.
//Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar,
//só serão aceitas as seguintes respostas:
//(1)Hortifruti
//(2)Laticínios
//(3)Carnes
//(4)Peixes
//(5)Aves
//(6)Fechar pedido
//Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

//Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

//Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

var qtdHortifruti = 0;
var qtdLaticinios = 0;
var qtdCarnes = 0;
var qtdPeixes = 0;
var qtdAves = 0;

do {
  var pergunta = prompt(
    "Qual produto voce deseja comprar? (1)Hortifruti, (2)Laticínios, (3)Carnes, (4)Peixes, (5)Aves, (6)Fechar pedido"
  );

  if (pergunta == "6") break;

  var qtdproduto = parseInt(
    prompt("Qual a quantidade de itens que você deseja comprar?")
  );

  if (pergunta == "1") qtdHortifruti = qtdHortifruti + qtdproduto;
  if (pergunta == "2") qtdLaticinios = qtdLaticinios + qtdproduto;
  if (pergunta == "3") qtdCarnes = qtdCarnes + qtdproduto;
  if (pergunta == "4") qtdPeixes = qtdPeixes + qtdproduto;
  if (pergunta == "5") qtdAves = qtdAves + qtdproduto;
} while (true);

var produtoMais = "";
var qtdMais = 0;
if (qtdHortifruti > qtdMais) {
  produtoMais = "Hortifruti";
  qtdMais = qtdHortifruti;
}

if (qtdLaticinios > qtdMais) {
  produtoMais = "Laticínios";
  qtdMais = qtdLaticinios;
}

if (qtdCarnes > qtdMais) {
  produtoMais = "Carnes";
  qtdMais = qtdCarnes;
}

if (qtdPeixes > qtdMais) {
  produtoMais = "Peixes";
  qtdMais = qtdPeixes;
}

if (qtdAves > qtdMais) {
  produtoMais = "Aves";
  qtdMais = qtdAves;
}

console.log(produtoMais + ": " + qtdMais);
