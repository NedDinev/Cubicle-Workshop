const express = require("express");

const config = require("./config");
const setupViewEngine = require("./config/viewEngine");

const app = express();
setupViewEngine(app);

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
