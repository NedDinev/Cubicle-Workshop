const jwt = require("../lib/jsonWebToken");
const config = require("../config");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, config.SECRET); // verify the token

      req.user = decodedToken;
      req.isAuthenticated = true;

      res.locals.username = decodedToken.username;
      res.locals.isAuthenticated = true; // adds isAuthenticated to the main handlebars layout
    } catch (error) {
      res.clearCookie("auth"); // deletes the cookie
      res.redirect("/404");
    }
  }
  next();
};

exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated) {
    return res.redirect("/login");
  }
  next();
};
