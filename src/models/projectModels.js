const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   mail: {
     type: String,
     required: [true , "prenom requis"],
     unique: true,
    validate: {
        validator:function(v) {
            return /^[\w-\.]+@(\[w-]+\.)+[w-]{2,4}$/g.test(v);
        },
        message: "Enter valid email"
    },
   },
     
   password: {
     type: String,
     required: [true , "password requis"],
     validate: {
        validator:function(v) {
            return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g.test(v);
        },
        message: "Enter valid password"
    },
   },
})

bcrypt.hash(this.password, 10, (error,  hash))



const modelProject = new mongoose.Model('user' , userSchema )
module.exports = modelProject