const routerMain = require("express").Router();
const mongoose = require("mongoose");
const userModel = require('../models/projectModels')
const bcrypt = require('bcrypt')
routerMain.get("/", (req, res) => {
     try {
          res.render("home/index.html.twig", {
         
          });
        } catch (error) {
          res.send(error);
        }
});



// routerMain.get("/issou", async (req, res) => {
//     try {
//         let user = {
//             mail: "",
//             password:await bcrypt.hash("123tevaD",10)
//         }
//         console.log(user);
//         let newuser = new userModel(user)
//         newuser.save()

//        } catch (error) {
//         console.log(error)
//          res.send(error);
//        }
// });
module.exports = routerMain;
