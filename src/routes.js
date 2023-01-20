const cubeController = require("./controllers/cubeController");
const router = require("express").Router();

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/create", cubeController.getCreateCube);
app.get("/details/:id", (req, res) => {
  res.render("details");
});
app.get("*", (req, res) => {
  res.render("404");
});
