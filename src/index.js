const express = require("express");

const app = express();
const config = require("./config");
const setupViewEngine = require("./config/setupViewEngine");
setupViewEngine(app);

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
