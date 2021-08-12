const { Router } = require("express");
const userRoutes = require("./user.routes");
const taskRoutes = require("./task.routes");
const authRoutes = require("./auth.routes");

const loggedInRoutes = () => {
  // aca se registran todas las rutas de la parte interior
  const router = Router();
  router.use("/users", userRoutes);
  router.use("/tasks", taskRoutes);

  return router;
};

const authroutes = () => {
  // aca se registran todas las rutas de la parte exterior
  const router = Router();
  router.get("/", (req,res)=>res.send("WELCOME TO THE API!"));
  router.use("/auth", authRoutes);
  return router;
};

module.exports = { loggedInRoutes, authroutes };
