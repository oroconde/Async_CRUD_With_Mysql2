const express = require("express");
const morgan = require("morgan");
const app = express();
const { errorMiddleware } = require("./middlewares/error");
const { route } = require('./routes');

app.use(express.json());
app.use(morgan("dev"));
app.use(errorMiddleware);
app.use(route);

module.exports = app;
