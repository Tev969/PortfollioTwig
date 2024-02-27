const routerMain = require("express").Router();

routerMain.get("/", (req, res) => {
     try {
          res.render("home/index.html.twig", {
         
          });
        } catch (error) {
          res.send(error);
        }
});

module.exports = routerMain;
