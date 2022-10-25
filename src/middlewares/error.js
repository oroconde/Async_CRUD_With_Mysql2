const errorMiddleware = async (error, req, res, next) => {
  if (error) {
    res.status(500).send(error);
  }
  next();
};

module.exports = errorMiddleware