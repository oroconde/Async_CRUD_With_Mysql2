require("dotenv").config();

//procesado de variables de entorno con dotenv
module.exports = {
  server_port: process.env.SERVER_PORT,
  dbhost: process.env.DB_HOST,
  dbuser: process.env.DB_USER,
  dbport: process.env.DB_PORT,
  dbname: process.env.DB_NAME,
  dbpass: process.env.DB_PASS,
};