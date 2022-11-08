const { mysqlconnection } = require('../database');
module.exports = {
  execute_mysql: async (query) => {
    try {
      const connection = await mysqlconnection();
      const data = await connection.query(query);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
