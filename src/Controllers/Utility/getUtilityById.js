const { Utilities } = require("../../models");

//SPECIFIC UTILITIES
const getUtilityById = async (req, res) => {
  try {
    const util = await Utilities.findById(req.params.utilitiesId, function (err, util) {
      if (err)
          return console.log(err);
      res.render('utilities/edit-utility' ,{
          id: util._id,
          name: util.name,
          iconUrl: util.iconUrl,
          type : util.type,
          message: req.flash("message")
      });
      console.log(util._id)
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getUtilityById;
