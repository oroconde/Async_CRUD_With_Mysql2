const { getall } = require("../models/sales");

const gotall = async (req, res, next) => {
try {
    const data = await getall();
    res.status(200).json({data, success: true})     
} catch (error) {
    next(error)
}

  
};
// const gotone = async (req, res) => {};
// const gotcreate = async (req, res) => {};
// const gotdelete = async (req, res) => {};
// const gotupdate = async (req, res) => {};

module.exports = { gotall };
// , gotone, gotcreate, gotdelete, gotupdate