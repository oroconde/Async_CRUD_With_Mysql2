const { connectionDB } = require("../database/config");

const execute = async (query) => {
  try {
    const connection = await connectionDB();
    const data = await connection.query(query);
    return data;
  } catch (error) {
    throw error;
  }
};
const getall = async () => {
  const data = await execute(`SELECT * FROM sales_db.sales`);
  return data[0];
};
const findone = async (entity) => {
  const { } = entity
  const data = await execute(`select * from sales where order_id = '${entity}'`);
  return data[0];
};
const create = async (entity) => {
  const { order_id, date, units, amount, user_id_fk, product_id_fk } = entity
  const data = await execute(`INSERT INTO  sales (order_id, date, units, amount, user_id_fk, product_id_fk)) values ('${order_id}', '${date}', '${units}', '${amount}', '${user_id_fk}', '${product_id_fk}')` )
  return data [0]
};
const deleted = async () => {};
const update = async () => {};

module.exports = { execute, getall, findone , create, deleted, update };

// getall().then(console.log).catch(console.error);
