const { User } = require("../../models");

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const updates = req.body;
    const option = { new: true };

    const result = await User.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateUser;
