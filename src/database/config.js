// importación de variables de entorno procesadas
const { dbhost, dbname, dbpass, dbport, dbuser, server_port } = require("../config");
const mysql2 = require('mysql2/promise')

// creacion de la conexion a la base de datos
module.exports = {
  connectionDB: async () => {
    return await mysql2.createConnection({
      server_port,
      dbhost,
      dbport,
      dbuser,
      dbname,
      dbpass
    });
  },
};
