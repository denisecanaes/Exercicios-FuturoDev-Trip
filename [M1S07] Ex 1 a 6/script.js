// 1-Crie uma classe chamada Produto com os seguintes atributos:
// nome
// preco
// quantidade

// 2-Crie um construtor para a classe Produto que permita receber os valores base
// para cada um dos parâmetros.

// 3-Crie um método para a classe Produto chamado de Vender().
// Este método deve receber como parâmetro a quantidade vendida e deve
// reduzir (deduzir) da quantidade do produto. Porém, para ser possível essa
// venda, a quantidade vendida não pode ser maior que a quantidade disponível.
// Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

// 4-Crie um método chamado Repor() dentro da classe Produto.
// Este método deve receber como parâmetro a quantidade
// reposta e adicionar o montante à quantidade do produto.

// 5-Crie um método chamado de MostrarEstoque() dentro da classe Produto.
// Este método deve exibir uma mensagem parecida com a seguinte:
// “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

// 6-Crie um método chamada de AtualizarPreco dentro da classe Produto.
// Este método deve receber como parâmetro o novo valor do produto e atualizar
// o preço atual.

class Produto {
  nome;
  preco;
  quantidade;

  constructor(valorNome, valorPreco, valorQuantidade) {
    this.nome = valorNome;
    this.preco = valorPreco;
    this.quantidade = valorQuantidade;
  }

  Vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade) {
      console.log("Estoque insuficiente");
      console.log(`Existe apenas ${this.quantidade} unidades disponíveis`);
      return;
    }
    this.quantidade -= quantidadeVendida;
  }

  Repor(quantidadeeResposta) {
    this.quantidade += quantidadeeResposta;
  }

  MostrarEstoque() {
    console.log(
      `O produto ${this.nome} custa R$ ${this.preco} e possui ${this.quantidade} unidades em estoque`
    );
  }

  AtualizarPreco(novoValor) {
    this.preco = novoValor;
  }
}
