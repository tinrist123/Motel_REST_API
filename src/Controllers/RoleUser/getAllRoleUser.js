const { RoleUser } = require("../../models");

const getAllRoleUser = async (req, res) => {
  try {
    const role = await RoleUser.find();
    res.status(200).json(role);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
module.exports = getAllRoleUser;
