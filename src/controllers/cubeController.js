const Cube = require("../models/Cube");
const db = require("../db.json");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  //save cube
  const { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube({name, description, imageUrl, difficultyLevel});
  await cube.save();
  //redirect
  res.redirect("/");
};

exports.getDetailsPage = (req, res) => {
  let cubeId = Number(req.params.cubeId);
  if (!cubeId) {
    return res.redirect("/404");
  }
  let cube = db.cubes.find((x) => x.id === cubeId);

  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube });
};
