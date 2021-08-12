const express = require("express");
var cors = require('cors')
const routerConfig = require("./routes/index.routes");
require('dotenv').config()

const PORT = process.env.PORT || 5000

const configApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  return;
};

const configRouter = (app) => {
  app.use("/api/v1/", routerConfig.loggedInRoutes());
  app.use("/", routerConfig.authroutes());

};

const configureApiHeaders = (app) => {
  // Set Headers
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
};

const init = () => {
  const app = express();
  configApi(app);
  configRouter(app);
  configureApiHeaders(app);
  app.listen(PORT);
  console.log("Su aplicacion se esta ejecutando en el puerto: "+PORT);
};

init();
