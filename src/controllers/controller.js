const { getall } = require('../models/admin');

const gotall = async (req, res, next) => {
  try {
    const data = await getall();
    res.status(200).json({ data, success: true });
  } catch (error) {
    next(error);
  }
};
const gotone = async (req, res, next) => {
  try {
    const data = await findone();
    res.status(200).json({ data, success: true });
  } catch (error) {
    next(error);
  }
};
const gotcreate = async (req, res, next) => {
  try {
    const { order_id, date, units, amount, user_id_fk, product_id_fk } =
      req.body;
    const data = await create({
      order_id,
      date,
      units,
      amount,
      user_id_fk,
      product_id_fk,
    });
    res.status(200).json({ data, success: true });
  } catch (error) {
    next(error);
  }
};
const gotdelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await deleted(id);
    res.status(200).json({ data, success: true });
  } catch (error) {
    next(error);
  }
};
const gotupdate = async (req, resn, next) => {
  try {
    const { id } = req.params;
    const { order_i, date, units, amount, user_id_fk, product_id_fk } =
      req.body;
    const data = await update(id, {
      order_i,
      date,
      units,
      amount,
      user_id_fk,
      product_id_fk,
    });
    res.status(200).json({ data, success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { gotall, gotone, gotcreate, gotdelete, gotupdate };
