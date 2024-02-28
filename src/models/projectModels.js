const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   mail: {
     type: String,
     required: [true , "prenom requis"],
     unique: true,
    validate: {
        validator:function(v) {
            return /^[\w-\.]+@(\[w-]{2,4}$/g.test(v);
        },
    },
   }
     
   },
   password: {
     type: String,
     required: [true , "password requis"]
   }
})

const modelProject = new mongoose.Model('user' , userSchema )
module.exports = modelProject