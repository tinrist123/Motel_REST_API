const { RoleUser } = require("../../src/models/index");
const { count } = require("../../src/models/User");

function MigrateRoleUser() {
  const listRoleUser = require("../roleUser.json");

  let countAddedRole = 0;

  listRoleUser.roleUser.map(async (roleUser) => {
    const { name_role, note } = roleUser;
    let roleModel = new RoleUser({ name_role, note });

    try {
      let saveRole = await roleModel.save();
      if (saveRole) countAddedRole++;
    } catch (error) {
      console.log(error);
    }
    if (countAddedRole === listRoleUser.roleUser.length) {
      console.log("Added Role success");
    }
  });
}

module.exports = MigrateRoleUser;
