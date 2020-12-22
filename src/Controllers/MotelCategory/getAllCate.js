const { MotelCategory } = require("../../models");

const getAllCategory = async (req, res) => {
  try {
    const category = await MotelCategory.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllCategory;
