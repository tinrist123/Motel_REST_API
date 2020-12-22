const { RoleUser } = require("../../models");

const updateRoleById = async (req, res, next) => {
  try {
    const id = req.params.roleUserId;
    const updates = req.body;
    const option = { new: true };

    const result = await RoleUser.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRoleById;
