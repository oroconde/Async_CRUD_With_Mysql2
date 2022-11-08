const { env_mysql } = require("./process.env.mysql");
const { env_postgres } = require("./process.env.pg");
const { server_port } = require("./port.config");

module.exports = { server_port, env_mysql, env_postgres };
