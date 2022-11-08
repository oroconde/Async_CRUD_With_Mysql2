// importación de variables de entorno procesadas
const mysql2 = require("mysql2/promise");
const { env_mysql } = require("../config");

// creacion de la conexion a la base de datos
module.exports = {
  mysqlconnection: async () => {
    return await mysql2.createConnection({
      database: env_mysql.dbname,
      port: env_mysql.dbport,
      user: env_mysql.dbuser,
      password: env_mysql.dbpass,
      host: env_mysql.dbhost,
    });
  },
};
