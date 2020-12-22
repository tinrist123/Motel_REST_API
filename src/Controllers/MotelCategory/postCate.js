const { MotelCategory } = require("../../models");

const postCategory = async (req, res) => {
  //console.log(req.body);
  const category = new MotelCategory({
    cate_name: req.body.cate_name,
    room_type: req.body.room_type,
  });
  try {
    const saveUtilities = await category.save();
    res.status(200).json(saveUtilities);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postCategory;
