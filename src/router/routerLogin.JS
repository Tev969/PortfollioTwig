const routerLogin = require("express").Router();
const authguard = require("../../services/authguard");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModels");
routerLogin.post("/login", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });

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
    res.redirect("/login");
  }
});

routerLogin.get("/login", (req, res) => {
    res.render("login/index.html.twig", {
      title: "Connect",
    });
  });

routerLogin.get("/dashboard", authguard, (req, res) => {
  res.render("dashboard/index.html.twig", {
    title: "Connect",
  });
});

module.exports = routerLogin;
