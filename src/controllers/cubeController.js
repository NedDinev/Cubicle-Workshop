const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = (req, res) => {
  console.log(req.body);
  //save cube
  let cube = new Cube(req.body);
  Cube.save(cube);
  //redirect
  res.redirect("/");
};
