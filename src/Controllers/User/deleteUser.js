const { User } = require("../../models");

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.remove({ _id: req.params.userId });
    res.status(200).json(deleteUser);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteUser;
