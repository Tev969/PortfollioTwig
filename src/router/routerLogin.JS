const routerLogin = require("express").Router();


routerLogin.get("/login", (req, res) => {
    try {
         res.render("login/index.html.twig", {
        
         });
       } catch (error) {
         res.send(error);
       }
});

module.exports = routerLogin;
