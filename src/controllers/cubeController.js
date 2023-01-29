const Cube = require("../models/Cube");
const db = require("../db.json");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  //save cube
  const { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube({ name, description, imageUrl, difficultyLevel });
  await cube.save();
  //redirect
  res.redirect("/");
};

exports.getDetailsPage = async (req, res) => {
  let cube = await Cube.findById(req.params.cubeId).lean();
  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube });
};
