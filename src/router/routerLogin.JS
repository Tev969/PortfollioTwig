const routerLogin = require("express").Router();
const userModel = require("../models/projectModels");
const authguard = require("../../services/authguard");
const bcrypt = require("bcrypt");
const modelProject = require("../models/projectModels");

routerLogin.post("/login", async (req, res) => {
  try {
    let user = await modelProject.findOne({ email: req.body.email });

    if (user) {
      console.log(user);
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.user = user._id;
        res.redirect("/dashboard");
      } else {
        throw { password: "Incorrect Password" };
      }
    } else {
      throw { email: "Vous n'etes pas enregistrer" };
    }
  } catch (error) {
    res.redirect("login/_login.html.twig");
  }
});

routerLogin.get("/dashboard", authguard, (req, res) => {
  res.render("login/_login.html.twig", {
    title: "Connect",
  });
});

module.exports = routerLogin;
