const { execute } = require("./dbexecute");
module.exports = {
  login: async (user) => {
    const data = await execute(); // <----- query para consultar usuario y contraseña
    return data;
    if (data == user) {
      return true;
    } else {
      return false;
    }
  },s
};
