const router = require("express").Router();

const authService = require("../services/authServices");

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
  } catch (error) {
    console.log(error);
    res.redirect("/404");
  }

  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.redirect("/404");
  }

  const existingUser = await authService.getUserByUsername(username);

  if (existingUser) {
    return res.redirect("/404");
  }

  const user = await authService.register(username, password);

  res.redirect("/login");
});

module.exports = router;