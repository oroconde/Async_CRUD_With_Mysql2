const { mysqlconnection } = require("../database/mysql.config");

const execute = async (query) => {
  try {
    const connection = await mysqlconnection();
    const data = await connection.query(query);
    return data;
  } catch (error) {
    throw error;
  }
};
const getall = async () => {
  const data = await execute(`SELECT * FROM sales_db`);
  return data[0];
};
// const findone = async (entity) => {
//   const { id } = entity;
//   const data = await execute(`select * from sales where order_id = '${id}'`);
//   return data[0];
// };
// const create = async (entity) => {
//   const { order_id, date, units, amount, user_id_fk, product_id_fk } = entity;
//   const data = await execute(
//     `INSERT INTO  sales (order_id, date, units, amount, user_id_fk, product_id_fk)) values ('${order_id}', '${date}', '${units}', '${amount}', '${user_id_fk}', '${product_id_fk}')`
//   );
//   return data[0];
// };
// const deleted = async (entity) => {
//   const { id } = entity;
//   const data = await execute(`select from * sales where (order_id = '${id}')`);
//   return data[0];
// };
// const update = async (id, entity) => {
//   const { order_id, date, units, amount, user_id_fk, product_id_fk } = entity;
//   const data = await execute(
//     `UPDATE sales set order_id = '${order_id}', date = '${date}', units = '${units}', amount = '${amount}, user_id_fk = '${user_id_fk}',  product_id_fk = '${product_id_fk}' where  order_id = '${id}`
//   );
//   return data[0];
// };

module.exports = { execute, getall }
  // findone, create, deleted, update };

getall().then(console.log).catch(console.error);
