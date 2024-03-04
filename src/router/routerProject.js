const routerProject = require("express").Router();
const userModel = require("../models/userModels");
const ProjectModel = require("../models/projectModel.js");
const authguard = require("../../services/authguard");
//rajouter le authguard apres les tests
routerProject.get("/dashboard", async (req, res) => {
    let projects  = await ProjectModel.find()
    console.log(projects);
    res.render("dashboard/index.html.twig", {
      title: "Connect",
      projects:projects,
    });
  });

routerProject.get("/addproject", authguard, async (req, res) => {
  res.render("addproject/index.html.twig", {
  });
});

routerProject.post("/submit_project", authguard, async (req, res) => {
  try {
    console.log(req.body);
    let project = new ProjectModel(req.body); // creation nouveau doc , projet
    console.log(project);
    await project.save(); // sauvegarde en base
    console.log("test");

    res.redirect("/dashboard");
  } catch (error) {
    //rend la vue si erreur

    res.render("dashboard/index.html.twig", {
      error: error,
    });
  }
});


routerProject.get('/delete/:projectid', authguard, async (req,res)  => {
    try {
        await ProjectModel.deleteOne({ _id: req.params.projectid});
        res.redirect("/dashboard");
    } catch (error) {
        res.render('dashboard/index.html.twig',
        {
            errorDelete: "Probleme survenue "

        })
    }
})

routerProject.get('/update/:projectid' , authguard , async (req,res) => {
    try {
        let project = await ProjectModel.findById(req.params.projectid);
        console.log(project);
        if (!project) {
            throw { error: "Projet introuvable" };
        }
        res.render('updateProject/index.html.twig',{
            project:project
        })

    } catch (error) {
        console.log(error);
        res.render('dashboard/index.html.twig', 
        {
            error: "Impossible"
        })
    }
})

routerProject.post('/updateproject/:projectid', authguard, async (req,res)  => {
    try {
        await ProjectModel.updateOne({ _id: req.params.projectid});
        res.redirect("/dashboard");
    } catch (error) {
        res.render('dashboard/index.html.twig',
        {
            errorDelete: "Probleme survenue "

        })
    }
})



module.exports = routerProject;
