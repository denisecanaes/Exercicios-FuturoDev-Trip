// Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07
// iremos adaptar melhor nossa aplicação. Antes de tudo, assim que executar
// a aplicação você irá verificar no localStorage se já existe a chave “endereco”
// caso haja, deverá ser informado que já existe um endereço na nossa base de dados
// e se o usuário deseja fazer uma nova requisição para um novo endereço, após
// disponibilizar o prompt para a captura do novo cep, salve os dados na mesma
// chave “endereco” existente no localStorage. Caso não haja a chave o fluxo deve
// ser feito como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt,
// fazer a requisição, e salvar os dados no localStorage.

// OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.

let endereco = localStorage.getItem("endereco");

if (endereco == null) {
  pegarEndereco();
} else {
  let atualiza = prompt(
    "Endereço já informado na base de dados, deseja atualizar? S/N"
  );
  if (atualiza == "S") {
    pegarEndereco();
  } else {
    alert("Execução finalizada.");
  }
}

function pegarEndereco() {
  let cep = prompt("Digite seu CEP:");

  fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
    .then((retornoFetch) => {
      return retornoFetch.json();
    })
    .then((retornoApi) => {
      // “logradouro, complemento - bairro - localidade/uf”

      alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - 
    ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

      let resposta = prompt("Os dados estão corretos?");

      if (resposta.toLowerCase() == "sim") {
        localStorage.setItem("endereco", JSON.stringify(retornoApi));
      }
    });
}
