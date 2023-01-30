const router = require("express").Router();

const Accessory = require("../models/Accessory");
//URL: /accessory/create
router.get("/create", (req, res) => {
  res.render("accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body; //get form data
  let accessory = new Accessory({ name, description, imageUrl }); //use form data in accessory schema
  await accessory.save(); //save new accessory document to database

  //redirect
  res.redirect("/");
});

module.exports = router;
