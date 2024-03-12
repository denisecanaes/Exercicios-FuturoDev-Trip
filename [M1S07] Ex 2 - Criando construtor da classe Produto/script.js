// Crie um construtor para a classe Produto que permita receber os valores base
// para cada um dos parâmetros.

class Produto {
  nome;
  preco;
  quantidade;

  constructor(valorNome, valorPreco, valorQuantidade) {
    this.nome = valorNome;
    this.preco = valorPreco;
    this.quantidade = valorQuantidade;
  }
}
