const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/routes");
const { errorMiddle } = require("./middlewares/error");

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.use(errorMiddle);

module.exports = app;
