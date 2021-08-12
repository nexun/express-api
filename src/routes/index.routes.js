const { Router } = require("express");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

const loggedInRoutes = () => {
  // aca se registran todas las rutas de la parte interior
  const router = Router();
  router.use("/users", userRoutes);
  return router;
};

const authroutes = () => {
  // aca se registran todas las rutas de la parte exterior
  const router = Router();
  router.use("/auth", authRoutes);
  return router;
};

module.exports = { loggedInRoutes, authroutes };
