const { User } = require("../../src/models/index");
const userList = require("../user.json");

function MigrateUser() {
  let countDataAdded = 0;
  userList.map(async (user, index) => {
    const {
      id_role,
      first_name,
      date_of_birth,
      last_name,
      img_url_avatar,
      phone_number,
      address,
      identity_card,
    } = user;
    let dataUser = {
      id_role,
      first_name,
      date_of_birth,
      last_name,
      img_url_avatar,
      phone_number,
      address,
      identity_card,
    };
    let userModel = new User(dataUser);
    try {
      let saveUser = await userModel.save();
      if (saveUser) countDataAdded++;
    } catch (error) {
      console.log(error);
    }
    if (countDataAdded === userList.length) {
      console.log("Added User Success");
    }
  });
}

module.exports = MigrateUser;
