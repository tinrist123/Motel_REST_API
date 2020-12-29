const { MotelCategory } = require("../../models");

//SPECIFIC UTILITIES
const getCateById = async (req, res) => {
  try {
    const util = await MotelCategory.findById(req.params.id, function (err, cate) {
      if (err)
          return console.log(err);
      res.render('categories/edit-category' ,{
          id: cate._id,
          cate_name: cate.cate_name,
          room_type: cate.room_type,
          message: req.flash("message")
      });
      //console.log(cate._id)
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getCateById;
