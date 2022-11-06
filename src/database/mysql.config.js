// importación de variables de entorno procesadas
const mysql2 = require('mysql2/promise')
const { server_port, dbhost, dbname, dbpass, dbport, dbuser } = require('../config/credentials')

// creacion de la conexion a la base de datos
module.exports = {
  mysqlconnection: async () => {
    console.log("conexion exitosa!!!")
    return await mysql2.createConnection({
      server_port,
      dbhost,
      dbport,
      dbname,
      dbuser,
      dbpass
    });
  },
};
