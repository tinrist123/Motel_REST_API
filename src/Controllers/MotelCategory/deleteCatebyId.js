const { MotelCategory } = require("../../models");

const deleteCateById = async (req, res) => {
  try {
    await MotelCategory.deleteOne({
      _id: req.params.id,
    });

    //res.render('/categories/categories');
    res.redirect('/categories/admin');
    //res.render('/categories/categories', { message: req.flash('success', 'Data was deleted')});

  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteCateById;
