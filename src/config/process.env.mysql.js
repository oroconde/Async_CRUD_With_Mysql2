require("dotenv").config();

//procesado de variables de entorno con dotenv
const env_mysql = {
  server_port: process.env.SERVER_PORT,
  dbhost: process.env.DB_HOST,
  dbport: process.env.DB_PORT,
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASSWORD,
};
module.exports = { env_mysql };