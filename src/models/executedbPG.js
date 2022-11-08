const { postgresconnection } = require('../database');
module.exports = {
  execute_pg: async (query) => {
    try {
      const connection = await postgresconnection();
      const data = await connection.query(query);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
