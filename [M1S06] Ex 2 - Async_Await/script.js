// Crie uma função chamada getUserInfo que simula uma consulta assíncrona
// a um servidor para obter informações de um usuário.
// Essa função deve retornar um objeto com as informações de um usuário,
// como nome, idade e email (você pode definir os valores).
// Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos.
// Utilize async/await para realizar a chamada de forma assíncrona.
// Em seguida, crie outra função que utiliza getUserInfo para obter
// as informações do usuário e, após receber essas informações, exibe-as no console.

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let usuario = {
        nome: "Denise",
        idade: 38,
        email: "denise_canaes@estudante.sesisenai.org.br",
      };
      resolve(usuario);
    }, 2000);
  });
}

async function usuarioCall() {
  let retornoUsuario = await getUserInfo();
  console.log(retornoUsuario);
}

usuarioCall();

// // () => {
// //   1 + 1;
// // };

// // function calcula() {
// //   return 1 + 1;
// // }

// function getUserInfo(resolve, reject) {
//   let usuario = {
//     nome: "Thiago",
//     idade: 40,
//     email: "thiago@email.com",
//   };
//   resolve(usuario);
// }

// const promessaUserInfo = new Promise(getUserInfo);
// console.log(promessaUserInfo);

// function retornoPromessa(retornado) {
//   console.log(retornado);
// }

// promessaUserInfo.then(retornoPromessa);
