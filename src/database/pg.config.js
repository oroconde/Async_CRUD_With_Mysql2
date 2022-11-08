const {env_postgres } = require('../config');
const { Client } = require('postgres');

module.exports = {
  postgresconnection: async () => {
    return await Client.connect({
      host: env_postgres.pghost,
      port: env_postgres.pgport,
      user: env_postgres.pguser,
      pass: env_postgres.pgpass,
      name: env_postgres.pgname,
      ssl: true,
    });
  },
};

// module.exports.postgresconnection = async () => {
//   const client = new Client({
//     host: envpostgres.pghost,
//     port: envpostgres.pgport,
//     user: envpostgres.pguser,
//     pass: envpostgres.pgpass,
//     name: envpostgres.pgname,
//   });
//   await client.connect();
//   console.log("conexion exitosa!!!");
//   return client;
// };
