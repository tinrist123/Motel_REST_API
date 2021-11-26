const fs = require("fs");
const { RoleUser } = require("../src/models/index");
const faker = require("faker");
const listData = [];

async function createAdmin() {
  let dataRole_id = await RoleUser.findOne({}).skip(1).limit(1);
  let dataAdmin;
  if (dataRole_id) {
    dataAdmin = {
      id_role: dataRole_id._id,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      date_of_birth: faker.date.past(),
      img_url_avatar: faker.image.cats(),
      phone_number: faker.phone.phoneNumber(),
      address:
        faker.address.country() +
        " " +
        faker.address.cityPrefix() +
        " " +
        faker.address.streetAddress(),
      identity_card:
        faker.address.zipCode() +
        faker.address.zipCode() +
        faker.random.number(0),
    };
  }
  // console.log(dataUser);
  return Promise.resolve(dataAdmin);
}

async function createFakeUser() {
  for (let i = 0; i < 100; i++) {
    let dataRole_id = await RoleUser.findOne({}).skip(0).limit(1);

    if (dataRole_id) {
      dataUser = {
        id_role: dataRole_id._id,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        date_of_birth: faker.date.past(),
        img_url_avatar: faker.image.cats(),
        phone_number: faker.phone.phoneNumber(),
        address:
          faker.address.country() +
          " " +
          faker.address.cityPrefix() +
          " " +
          faker.address.streetAddress(),
        identity_card:
          faker.address.zipCode() +
          faker.address.zipCode() +
          faker.random.number(0),
      };
    }
    listData.push(dataUser);
  }
  let dataAdmin = await createAdmin();
  listData.push(dataAdmin);

  const data = JSON.stringify(listData, null, 2);
  fs.writeFile("./backup/user.json", data, (err) => {
    if (err) console.log(err);
    else console.log("Created");
  });
}

module.exports = createFakeUser;
