// Crie uma função que irá pedir 3 informações através do prompt,
// o nome, a idade e o email.
// Monte essas informações em um objeto igual ao do exercício 03,
// após isso salve esse objeto com a chave “user” no localStorage.

function dadosInformacoes() {
  const nome = prompt("Digite seu nome: ");
  const idade = prompt("Digite a sua idade: ");
  const email = prompt("Digite o seu email: ");

  const user = {
    nome: nome,
    idade: idade,
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(user));
}
dadosInformacoes();
