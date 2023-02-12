const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a mi pagina de inicio");
});

module.exports = app;
