const User = require("../models/User");
const config = require("../config");

const jwt = require("../lib/jsonWebToken");

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
  const user = await this.getUserByUsername(username);

  const isValid = await user.validatePassword(password);
  if (!user || !isValid) {
    throw "Invalid username or password";
  }

  const payload = { username: user.username, id: user._id };
  const token = jwt.sign(payload, config.SECRET, { expiresIn: "2h" });

  return token;
};
