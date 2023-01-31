const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

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
  const cube = await Cube.findById(req.params.cubeId)
    .populate("accessories")
    .lean(); //get cube id from url and populate accessories
  console.log(cube);
  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube }); //render current id page
};

exports.getAttachAccessory = async (req, res) => {
  const cube = await Cube.findById(req.params.cubeId).lean();
  const accessories = await Accessory.find().lean();

  res.render("cube/attach", { cube, accessories });
};

exports.postAttachAccessory = async (req, res) => {
  const cube = await Cube.findById(req.params.cubeId);
  const accessoryId = req.body.accessory;

  cube.accessories.push(accessoryId);

  cube.save();

  res.redirect(`/cubes/${cube._id}/details`);
};
