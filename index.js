const { config } = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const routerMain = require("./src/router/routerMain")
const routerLogin = require("./src/router/routerLogin")
require('dotenv').config()


const app = express()
app.use(express.static("./assets"))
app.use(express.urlencoded({extended:true}))
app.use(routerMain)
app.use(routerLogin)


app.listen(parseInt(process.env.PORT) , (err)=>{
     if (err) {
          console.log(err);
     }
     else {
          console.log("connected");
     }
})

mongoose.connect(process.env.URLBDD)