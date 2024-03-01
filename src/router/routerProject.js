const routerProject = require("express").Router();
const userModel = require("../models/userModels");
const projectModel = require("../models/projectModel");
const authguard = require("../../services/authguard");

routerProject.get("/addproject", authguard, async (req, res) => {
  res.render("addproject/index.html.twig", {
    user: await userModel.findById(req.session.user._id),
  });
});

routerProject.post("/addproject", authguard, async (req, res) => {
  try {
    let newProject = new projectModel(req.body); // creation nouveau doc , projet
    newProject._user = req.session.user._id
    await book.save(); // sauvegarde en base

    res.redirect("/dashboard");
  } catch (error) {
    //rend la vue si erreur

    res.render("addproject/index.html.twig", {
      user: await userModel.findById(req.session.user._id),
      error: error,
    });
  }
});


projectSchema.pre("save" , async function (nexr) {
    await userModel.updateOne(
        { _id: this._user},
        {$addToSet: {   projectCollection: this._id}}
        );
        next();
})

module.exports = routerProject;
