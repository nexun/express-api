const router = require("express").Router();

router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send("Bienvenido " + name);
});

router.post("/:name", (req, res) => {
  const { name } = req.params;
  res.send("Bienvenido " + name);
});

module.exports = router;
