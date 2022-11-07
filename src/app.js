const express = require("express");
const morgan = require("morgan");
const app = express();
const { errorMiddleware } = require("./middlewares/error");
const routesales = require('./routes');

app.use(express.json());
app.use(morgan("dev"));
app.use(errorMiddleware);
app.use(routesales);

module.exports = app;
