const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/public/sobre.html");
});

app.get("/pdf", (req, res) => {
  res.sendFile(__dirname + "/public/dummy.pdf");
});

app.listen(3000, function () {
  console.log("Servidor iniciado...");
});
