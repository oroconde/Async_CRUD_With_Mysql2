const { Router } = require("express");
const route = Router();
const {
  gotall,
  gotcreate,
  gotone,
  gotdelete,
  gotupdate,
} = require("../controllers/controller");

route.get("users/", gotall);
route.post("add/", gotcreate);
route.get("user/:id", gotone);
route.delete("del/:id", gotdelete);
route.put("edit/:id", gotupdate);

module.exports = { route };
