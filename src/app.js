const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");
const middle = require("./middlewares/error");

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.use(middle.error);

module.exports = app;
