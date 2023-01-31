const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 50 },
  imageUrl: { type: String, required: true }, //add http/https validations
  difficultyLevel: { type: Number, required: true, $gte: 1, $lte: 6 },
  accessories: [{ type: mongoose.Types.ObjectId, ref: "Accessory" }],
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
