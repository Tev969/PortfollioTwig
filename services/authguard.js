const userModel = require("../src/models/projectModels");

const authguard = async (req, res, next) => {
  try {
    if (req.session.user) {
      let user = await userModel.findOne({ email: req.session.user.email });
      if (user) {
        return next();
      }
    }
    throw new Error("utilisateur non connecté");
  } catch (error) {
    console.log(error.message);
    res.status(401).render("login/_login.html.twig", {
      title: "connexion",
      errorAuth: error.message,
    });
  }
};

module.exports = authguard
