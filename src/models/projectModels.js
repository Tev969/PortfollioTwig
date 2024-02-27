const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   mail: {
     type: String,
     required: [true , "prenom requis"]
   },
   password: {
     type: String,
     required: [true , "password requis"]
   }
})

const modelProject = new mongoose.Model('user' , userSchema )
module.exports = modelProject