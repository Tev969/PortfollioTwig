
const userModel = require("../src/models/userModels");

const authguard = async (req, res, next) => {
  try {
    if (req.session.user) {
      let user = await userModel.findOne({ id: req.session.user._id });
      if (user) {
        return next();
      }
    }
    throw new Error("utilisateur non connecté");
  } catch (error) {
    console.log(error.message);
    res.redirect("/login");
  }
};

module.exports = authguard
