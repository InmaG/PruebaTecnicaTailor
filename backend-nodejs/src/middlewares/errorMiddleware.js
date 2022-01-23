const errorMiddleware = (error, req, res, next) => {
  console.log({ error });
  res.status(error.status).send({
    OK: 0,
    message: error.message,
  });
  next();
};

module.exports = errorMiddleware;
