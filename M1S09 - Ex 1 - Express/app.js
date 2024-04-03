const express = require("express");

const app = express();

app.get("/sobre", function (req, res) {
  res.send("Exercício 2 rotas");
});

app.get("/contato", function (req, res) {
  res.send("Me liga: 48 xxxxxx");
});

app.get("/produto/:id", function (req, res) {
  switch (req.params.id) {
    case "10":
      res.send("O produto é banana:");
      break;

    case "11":
      res.send("O produto é morango:");
      break;

    default:
      res.send("O " + req.params.id + " não existe");
  }
});

app.listen(3000, function () {
  console.log("Servidor Rodando!!!");
});
