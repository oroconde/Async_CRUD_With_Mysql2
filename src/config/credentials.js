require("dotenv").config();

//procesado de variables de entorno con dotenv
module.exports = {
  server_port: process.env.SERVER_PORT,
  dbhost: process.env.DB_HOST,
  dbport: process.env.DB_PORT,
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASSWORD,
};