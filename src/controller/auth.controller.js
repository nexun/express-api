const model = require("../database/models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).send({ message: "Datos incompletos" });
  }
  const username = req.body.username;
  const password = req.body.password;

  await model.User.findOne({
    where: { username: username },
  }).then((user) => {
    if (!user) {
      return res.status(401).send({ message: "Datos incorrectos" });
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Datos incorrectos" });
    }
    const token = jwt.sign({ id: user.id }, "mySecretKey", {
      expiresIn: 10,
    });

    return res.status(200).send({
      id: user.id,
      username: user.username,
      token: token,
    });
  });
};

module.exports = { login };
