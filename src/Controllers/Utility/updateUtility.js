const { Utilities } = require("../../models");
// const { update } = require("../../models/User");

const updateUtilsById = async function (req, res) {
  try {
    const id = req.body.id;
    const updates = {
      name: req.body.name,
      iconUrl: req.body.iconUrl,
      type: req.body.type,
    }
    const option = { new: true };
    const result = await Utilities.findByIdAndUpdate(id, updates, option);
    //res.send(result);
    req.flash("message","Utility Successfully Edited !");
    res.redirect("/utilities/admin/edit-utility/" +id);

  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateUtilsById;

//   utility.find(function (err, utility) {
//     if (err) {
//       console.log(err);
//     } else {
//       req.app.locals.utilities = utility;
//     }
//   });
// req.flash("success", "Utility edited!");
// res.redirect("/admin/edit-utility/" + id);
