const { Utilities } = require("../../models");

const deleteUtilsById = async function (req, res) {
  try {
    const deleteUtilities = await Utilities.deleteOne({
      _id: req.params.utilitiesId,
    });
    //res.status(200).json(deleteUtilities);
    //res.render('/utilities/utilities', { message: req.flash('success', 'Data was deleted')});
    res.redirect('/utilities/admin');
  } catch (err) {
    //res.status(404).json({ message: err });
  }
};

module.exports = deleteUtilsById;
