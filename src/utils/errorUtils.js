exports.parseMongooseError = (err) => {
  const errors = Object.keys(err.errors).map((key) => err.errors[key].message); // to get all error messages

  return errors;
};
