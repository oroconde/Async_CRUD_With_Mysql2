const { Router } = require("express");
const route = Router();
const { listall } = require('../models/sales');

route.get("users/", listall);
route.post("add/", );
route.get("user/:id", );
route.delete("del/:id", );
route.update("edit/:id", );


module.exports = route