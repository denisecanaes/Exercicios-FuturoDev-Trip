const express = require("express");
const app = express();

const pessoas = [];

app.use(express.json());

//const pessoa = {
//  id: "",
//  nome: "",
//  idade: "",
//};

app.post("/", (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.status(201);
  res.json(pessoas);
});

app.get("/users", (req, res) => {
  res.json(pessoas);
});

app.get("/users/:id", (req, res) => {
  const pessoa = pessoas.find((pessoa) => pessoa.id == req.params.id);
  if (pessoa) res.json(pessoa);
  else res.status(404).end();
});

app.put("/users/:id", (req, res) => {
  const idx = pessoas.findIndex((pessoa) => pessoa.id == req.params.id);
  if (idx < 0) res.status(404).end();
  pessoas[idx].nome = req.body.nome;
  pessoas[idx].idade = req.body.idade;
  res.status(200);
  res.json(pessoas[idx]);
});

app.delete("/users/:id", (req, res) => {
  const idx = pessoas.findIndex((pessoa) => pessoa.id == req.params.id);
  if (idx < 0) {
    console.log(idx);
    res.status(404).end();
  } else {
    pessoas.splice(idx, 1);
    res.status(200);
    res.json({ message: `${req.params.id} excluido com sucesso!` });
  }
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
