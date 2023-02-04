const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const config = require("./config");
const authMiddleware = require("./middleware/authMiddleware");
const setupViewEngine = require("./config/viewEngine");
const initDatabase = require("./config/databaseInit");

const app = express();
setupViewEngine(app);

app.use(express.static("src/public")); // initializes public files
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware.authentication);
app.use(routes);

initDatabase() //if database doesn't exist, don't run server
  .then(() =>
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}...`);
    })
  )
  .catch((err) => console.log(err));
