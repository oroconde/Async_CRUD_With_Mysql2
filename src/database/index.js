const { mysqlconnection } = require("./mysql.config");
const { postgresconnection } = require("./pg.config");

module.exports = { mysqlconnection, postgresconnection };