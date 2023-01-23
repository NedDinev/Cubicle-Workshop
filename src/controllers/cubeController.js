const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = (req, res) => {
  //save cube
  const { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube(name, description, imageUrl, difficultyLevel);
  Cube.save(cube);
  //redirect
  res.redirect("/");
};
