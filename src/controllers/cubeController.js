const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  //save cube
  let cube = new Cube({ name, description, imageUrl, difficultyLevel });
  await cube.save();

  //redirect
  res.redirect("/");
};

exports.getDetailsPage = async (req, res) => {
  let cube = await Cube.findById(req.params.cubeId).lean(); //get cube id from url
  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube });
};
