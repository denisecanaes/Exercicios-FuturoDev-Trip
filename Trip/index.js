//http://localhost:3000/

//http://localhost:3000/sobre = depois do / chamamos de rotas.

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sobre", function (req, res) {
  res.send("Essa é minha primeira aplicação do servidor");
});

app.get("/nome", function (req, res) {
  res.send("Meu nome é Denise");
});

app.get("/ola", function (req, res) {
  res.send("Olá, tudo bem?");
});

app.get("/ola/:nome/:idade", function (req, res) {
  // http://localhost:3000/ola/Rawan/25
  let nome = req.params.nome;
  res.send("Ola " + nome + " ,tudo bem?");
});

app.get("/busca", (req, res) => {
  // let parametro = req.query.parametro

  const { parametro } = req.query;

  // Verificar se o parâmetro "parametro" está presente!
  if (!parametro) {
    return res.status(400).json({
      error: "Parametros da Query estão faltando: parametro",
    });
  }

  let pessoas = [];

  app.post("/pessoas", (req, res) => {
    const pessoa = req.body;

    res.status(201).send("Pessoa adicionada com sucesso" + pessoa);
  });

  res.json({ message: `Você pesquisou por: ${parametro}` });
});

app.listen(3000, function () {
  console.log("Servidor Rodando!!!");
});
