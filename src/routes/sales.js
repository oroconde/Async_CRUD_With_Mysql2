const { Router } = require('express');
const { listall } = require('../models/sales');
const route = Router();

route.get("users/", listall);
route.post("add/", );
route.get("user/:id", );
route.delete("del/:id", );
route.update("edit/:id", );


module.exports = route