//global error handler
const errorHandler = (err, req, res, next) => {
  console.log(err);

  res.render("404", { error: err.message });
};

module.exports = errorHandler;
