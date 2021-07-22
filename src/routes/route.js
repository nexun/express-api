const { Router } = require("express");
const router = Router();
const userRoutes = require("./user.routes");

const init = () => {
  // aca se registran todas las rutas  
  router.use("/users", userRoutes);

  return router;
};

module.exports = { init };
