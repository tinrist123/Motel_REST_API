const { RoleUser } = require("../../models");

const postRoleUser = async (req, res) => {
  //console.log(req.body);
  const role = new RoleUser({
    name_role: req.body.name_role,
    note: req.body.note,
  });
  try {
    const saveRoleUser = await role.save();
    res.status(200).json(saveRoleUser);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postRoleUser;
