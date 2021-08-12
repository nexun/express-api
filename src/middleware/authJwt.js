const jwt = require("jsonwebtoken");

const check = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({
      message: "No enviaste el token",
    });
  }
  try {
    jwt.verify(token, "mySecretKey", (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Token Invalido!",
        });
      }
      req.userId = decoded.id;
      console.log(decoded.id)
      next();
    });
  } catch (err) {
    return res.status(500).send({ message: "Error interno del servidor" });
  }
};

const authJwt = { check };

module.exports = authJwt;
