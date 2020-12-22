const { RoleUser } = require("../../models");

const getRoleUserById = async (req, res) => {
  try {
    const role = await RoleUser.findById(req.params.roleUserId);
    res.status(200).json(role);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getRoleUserById;
