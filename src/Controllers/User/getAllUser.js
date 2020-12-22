const { User } = require("../../models");

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllUser;
