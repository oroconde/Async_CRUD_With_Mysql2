// importación de variables de entorno procesadas
const mysql2 = require("mysql2/promise");
const { env_mysql } = require("../config");

// creacion de la conexion a la base de datos
module.exports = {
  mysqlconnection: async () => {
    return await mysql2.createConnection({
      dbhost: env_mysql.dbhost,
      dbport: env_mysql.dbport,
      dbname: env_mysql.dbname,
      dbuser: env_mysql.dbuser,
      dbpass: env_mysql.dbpass,
    });
  },
};
