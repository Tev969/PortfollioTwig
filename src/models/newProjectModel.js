const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "titre requis"],
  },

  description: {
    type: String,
    required: [true, "description requise"],
  },

  techno: {
    type: String,
    required: [true, "techno requise"],
  },
});

const newProjectModel = mongoose.model('projets', projectSchema)
module.exports = newProjectModel
