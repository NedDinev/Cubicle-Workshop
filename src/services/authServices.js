const User = require("../models/User");
const config = require("../config");
const jwt = require("../lib/jsonWebToken");
const AppError = require("../utils/AppError");

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
  const user = await this.getUserByUsername(username);

  if (!user) {
    throw new AppError("Invalid username!", { user }); // in other conditions use more generic error message
  }

  const isValid = await user.validatePassword(password);
  if (!isValid) {
    throw new AppError("Invalid password!");
  }

  const payload = { username: user.username, _id: user._id };
  const token = jwt.sign(payload, config.SECRET, { expiresIn: "2h" });

  return token;
};
