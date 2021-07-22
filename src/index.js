const express = require("express");
const routerConfig = require("./routes/route");

const configApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return;
};

const configRouter = (app) => {
  app.use("/api/v1/", routerConfig.init());
};

const init = () => {
  const app = express();
  configApi(app);
  configRouter(app);
  app.listen(3000);
  console.log("Su aplicacion se esta ejecutando en el puerto 3000");
};

init();
