const routerMain = require("express").Router();

routerMain.get("/", (req, res) => {
     try {
          res.render("layouts/portfollio.html.twig", {
         
          });
        } catch (error) {
          res.send(error);
        }
});

module.exports = routerMain;
