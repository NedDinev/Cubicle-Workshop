const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [5, "username is too short"],
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: "Username should consist only of latin characters",
    },
  },
  password: {
    type: String,
    minLength: [6, "password is too short"],
    required: true,
  },
});

userSchema.pre("save", async function () {
  await bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
  });
});

userSchema.method("validatePassword", async function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
