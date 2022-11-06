const { Router } = require("express");
const routesales = Router();
const {
  gotall,
  gotcreate,
  gotone,
  gotdelete,
  gotupdate,
} = require("../controllers/controller");

routesales.get("users/", gotall);
routesales.post("add/", gotcreate);
routesales.get("user/:id", gotone);
routesales.delete("del/:id", gotdelete);
routesales.put("edit/:id", gotupdate);

module.exports = { routesales} ;