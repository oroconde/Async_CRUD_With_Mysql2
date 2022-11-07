const { mysqlconnection } = require("../database/mysql.config");
module.exports = {
  execute: async (query) => {
    try {
      const connection = await mysqlconnection();
      const data = await connection.query(query);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
