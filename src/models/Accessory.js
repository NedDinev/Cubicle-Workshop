const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }, //TODO: http/https validation
  description: { type: String, required: true, maxLength: 50 },
  //cube
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
