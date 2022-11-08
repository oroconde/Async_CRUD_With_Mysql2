require("dotenv").config();

//procesado de variables de entorno con dotenv
const env_postgres = {
  server_port: process.env.SERVER_PORT,
  pghost: process.env.PG_HOST,
  pgport: process.env.PG_PORT,
  pguser: process.env.PG_USER,
  pgpass: process.env.PG_PASSWORD,
  pgname: process.env.PG_NAME,
  ssl: true,
};
module.exports = { env_postgres };
