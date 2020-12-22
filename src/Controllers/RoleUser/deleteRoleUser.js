const { RoleUser } = require("../../models");

const deleteRoleUser = async (req, res) => {
  try {
    const deleteRole = await RoleUser.remove({ _id: req.params.roleUserId });
    res.status(200).json(deleteRole);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteRoleUser;
