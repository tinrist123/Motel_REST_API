const { User } = require("../../models");

//SPECIFIC UTILITIES
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getUserById;
