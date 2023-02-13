const { Router } = require("express");
const { db } = require("../firebase");
const router = Router();

router.get("/", async (req, res) => {
  const querySnapshot = await db.collection("contacts").get();

  const contacts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(contacts);

  res.send("Bienvenido a mi pagina ayeendo");
});

module.exports = router;
