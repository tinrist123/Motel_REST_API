const { MotelCategory } = require("../../models");

const updateCateById = async (req, res, next) => {
  try {
    const id = req.params.categoryId;
    const updates = req.body;
    const option = { new: true };

    const result = await MotelCategory.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateCateById;
