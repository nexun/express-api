const express = require("express");
const routerConfig = require("./routes/index.routes");
require('dotenv').config()

const PORT = process.env.PORT || 5000

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
  app.listen(PORT);
  console.log("Su aplicacion se esta ejecutando en el puerto: "+PORT);
};

init();
