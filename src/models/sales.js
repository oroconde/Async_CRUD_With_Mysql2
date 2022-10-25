const { connectionDB } = require("../database/config");

module.exports = {
  execute: async (query) => {
    try {
      const connection = await connectionDB();
      const data = await connection.query(query);
      return data;
    } catch (error) {
      throw error;
    }
  },

  listall: async () => {
    const data = await execute(`select * from sales`);
    return data[0];
  },
  findone: async (orderID) => {
    const data = await execute(
      `select * from sales where order_id = ${orderID}`
    );
    return data[0];
  },
  create: async (entity) => {
    const data = await execute(`insert into sales `));
  },
  delete: async () => {},
  update: async () => {},
};

listall().then(console.log).catch(console.error)