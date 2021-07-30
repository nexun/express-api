### PASOS PARA USAR ESTE PROYECTO


1. Clonar el repositorio con
   `git clone https://github.com/nexun/curso-node.git`
2. Moverse por consola a la carpeta donde se encuentra nuestro archivo package.json
   `cd curso-node/`
3. Ejecutar
   `npm install`
4. Recuerden instalar nodemon con el comando
   ` npm i -g nodemon`
5. Crear el archivo `.env` con la siguiente variable.
```
NODE_ENV=development
```
(Recuerde agregar su env al archivo .gitignore )

6. Finalmente
   `npm start`

### PASOS PARA INSTALAR LA BASE DE DATOS POSTGREsql Y EL ORM SEQUELIZE

1. Descargar e instalar PostgreSQL https://www.enterprisedb.com/downloads/postgres-postgresql-downloads (Recordar las credenciales que use)

2.Agregue en el archivo de variables de entorno

```
DB_USERNAME="su username"
DB_PASSWORD="su password"
DB_NAME="el nombre de su db (por def: postgres)"
```

3. Instalar las dependencias de sequelize y postgre para su proyecto

```
npm install -g sequelize-cli
npm install --save sequelize pg pg-hstore
```

4. Crear archivo ```.sequelizerc``` en el directorio raiz e ingresar los siguientes datos 

```
const path = require('path');

module.exports = {
  "config": path.resolve('./src/database/config', 'config.js'),
  "models-path": path.resolve('./src/database/models'),
  "seeders-path": path.resolve('./src/database/seeders'),
  "migrations-path": path.resolve('./src/database/migrations')
};
```

5. Ir al directorio ```database > config > config.js ``` y configurar tal como se muestra (recuerde tener las credenciales en el archivo .env)

```
require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
```

6. Ejecutar ```npx sequelize-cli init``` y observar si se crea la estructura de sequelize en la carpeta database

7. Crear la base de datos ejecutando ```npx sequelize-cli db:create``` (podemos usar el programa pgAdmin para chequear de forma manual la creacion de la bd)

8. Crear primer modelo ejecutando el comando (no dejen espacios cuando definan atributos)
```npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string```

9. Reflejar el modelo creado en la base de datos usando el comando ```npx sequelize-cli db:migrate``` 
(Recomiendo usar esto la primera vez para ver como funciona y despues mas adelante directamente usar la sincronizacion del modelo con el comando  ```sequelize.sync(/* { alter:true } */)```

