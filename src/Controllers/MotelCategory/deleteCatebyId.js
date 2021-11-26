const { MotelCategory } = require("../../models");

const deleteCateById = async (req, res) => {
  try {
    const deleteCategory = await MotelCategory.remove({
      _id: req.params.categoryId,
    });
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteCateById;
