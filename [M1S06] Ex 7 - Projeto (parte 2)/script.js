// Continuando o exercício 06 iremos além de informar através do alert
// o endereço informado pelo cep iremos perguntar também se os dados
// informados estão corretos, caso esteja tudo correto salve esses dados
// no localStorage na chave “endereco”.
// OBS: Revise o conteudo do localStorage para relembrar o comando para
// salvar no localStorage.

let cep = prompt("Digite seu CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
  .then((retornoFetch) => {
    return retornoFetch.json();
  })
  .then((retornoApi) => {
    alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - 
${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);
    let resposta = prompt("Os dados estão corretos?");
    if (resposta.toLowerCase() == "sim") {
      localStorage.setItem("endereco", JSON.stringify(retornoApi));
    }
  });
