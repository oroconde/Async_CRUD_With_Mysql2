const { connectionDB } = require("../database/config");

// const execute = async (query) => {
//   try {
//     const connection = await connectionDB();
//     const data = await connection.query(query);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// const getall = async () => {
//   const data = await execute(`SELECT * FROM sales_db.sales`);
//   return data[0];
// };
// module.exports = {getall, execute};

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

  getall: async () => {
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
    const data = await execute(`insert into sales `);
  },
  delete: async () => {},
  update: async () => {},
};

// getall().then(console.log).catch(console.error);
