const { Router } = require("express");
const route = Router();
const { gotall} = require('../controller/controller');

route.get("users/", gotall);
// route.post("add/", );
// route.get("user/:id", );
// route.delete("del/:id", );
// route.update("edit/:id", );


module.exports = route