const config = require("dotenv");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routerMain = require("./src/router/routerMain");
const routerLogin = require("./src/router/routerLogin");
const routerProject = require('./src/router/routerProject')
require("dotenv").config();

const app = express();
app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "pascal",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(routerMain);
app.use(routerLogin);
app.use(routerProject)

app.listen(parseInt(process.env.PORT), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

mongoose.connect(process.env.URLBDD);
