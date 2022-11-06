const express = require("express");
const morgan = require("morgan");
const app = express();
const routesales = require('./routes');
const { errorMiddleware } = require("./middlewares/error");

app.use(express.json());
app.use(morgan("dev"));
app.use(errorMiddleware);
app.use(routesales);

module.exports = app;
