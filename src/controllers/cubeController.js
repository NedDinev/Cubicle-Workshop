const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body; //get form data
  let cube = new Cube({ name, description, imageUrl, difficultyLevel }); //use data in cube schema
  await cube.save(); //save new cube document to database

  //redirect
  res.redirect("/");
};

exports.getDetailsPage = async (req, res) => {
  let cube = await Cube.findById(req.params.cubeId).lean(); //get cube id from url
  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube }); //render current id page
};
