const { server_port } = require("./config/credentials");
const app = require("./app");
app.listen(server_port, () => {
  console.log(`servidor corriendo en el puerto ${server_port}`);
});
