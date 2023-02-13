const { Router } = require("express");
const { db } = require("../firebase");
const router = Router();

router.get("/", (req, res) => {
  res.send("hola bienvenido ayeendo");
});

module.exports = router;
