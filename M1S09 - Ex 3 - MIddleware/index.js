const express = require("express");

const app = express();

const logSolicitacoes = (req, res, next) => {
  const horaAtual = new Date().toISOString();
  console.log(
    `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
  );
  next();
};

app.get("/", logSolicitacoes, (req, res) => {
  res.send("Chamada GET");
});

app.post("/", logSolicitacoes, (req, res) => {
  res.send("Chamada POST");
});

app.put("/", logSolicitacoes, (req, res) => {
  res.send("Chamada PUT");
});

app.delete("/", logSolicitacoes, (req, res) => {
  res.send("Chamada DELETE");
});

app.listen(3000, function () {
  console.log("Servidor Rodando!!!");
});
