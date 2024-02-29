const routerLogin = require("express").Router();

routerLogin.post("/login", async (req, res) => {
  try {
    let user = await userModel.findOn(
      { email: req.body.email },
      { password: 0 }
    );
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.user;
        res.redirect("/dashboard");
      } else {
        throw { password: "Incorrect Password" };
      }
    } else {
      throw { email: "Vous n'etes pas neregistrer" };
    }
  } catch (error) {
    res.render("login/index.html.twig", {
      title: "Connexion",
      error: error,
    });
  }
});

module.exports = routerLogin;
