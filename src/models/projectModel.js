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

  github: {
    type: String,
    required: [true, "github requis"],
  },
});

const ProjectModel = mongoose.model('projets', projectSchema)
module.exports = ProjectModel
