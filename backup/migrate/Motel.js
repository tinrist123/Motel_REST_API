const {
  Motel,
  MotelCategory,
  Utilities,
  User,
} = require("../../src/models/index");
const listUtilityTypeName = [
  "room_bathroom",
  "parking_situation",
  "window",
  "security_guard",
  "room_wifi",
  "curfew_situation",
  "share_home_as_landlord",
  "air_conditioned",
  "water_heater",
  "room_kitchen",
  "room_refrigerator",
  "room_washing_machine",
  "loft",
  "room_bed",
  "room_closet",
  "room_tivi",
  "room_pets_allowed",
];

const faker = require("faker");

function detectUtility(propsName) {
  return new Promise((resolve, reject) => {
    try {
      const utility = Utilities.findOne({ type: propsName });
      resolve(utility);
    } catch (err) {
      reject(err);
    }
  });
}
const createUtilitiesList = async (listUtilityType) => {
  const result = listUtilityType.map(async (type) => {
    let obj = await detectUtility(type);
    return obj._id;
  });
  return await Promise.all(result);
};

const randomHostMotel = async () => {
  const data = await User.findOne({}).skip(faker.random.number(100)).limit(1);
  console.log(data);
  return await Promise.resolve(data._id);
};

async function MigrateMotel() {
  const { data } = require("../output.json");
  let countDataAdded = 0;
  data.map(async (motelDetail) => {
    const category = await MotelCategory.findOne({
      room_type: motelDetail.room_type,
    });
    let listUtilityType = [];
    for (const props in motelDetail) {
      if (listUtilityTypeName.indexOf(props) !== -1) {
        if (motelDetail[props]) listUtilityType.push(props);
      }
    }

    let listUtility = await createUtilitiesList(listUtilityType);

    let id_host = await randomHostMotel();
    console.log(id_host);
    let newMotel = {
      id_motel_host: id_host,
      name_motel: motelDetail.room_name,
      room_price: motelDetail.room_price,
      square: motelDetail.room_area,
      deposit: motelDetail.deposit,
      electric_price: motelDetail.electric_price,
      water_price: motelDetail.water_price,
      parking_fee: motelDetail.parking_fee,
      wifi_cost: motelDetail.wifi_cost,
      more_description: motelDetail.notes,
      total_view: 0,
      prominent: motelDetail.is_top_room,
      imgUrl_list: motelDetail.upload_room_images,
      sex_allowed: motelDetail.room_gender,
      motel_category: category._id,
      isConfirmed: Math.floor(Math.random() * 2) === 0,
      room_is_shared: motelDetail.room_is_shared,
      util_list: listUtility,
      number_vacancies_available_in_room:
        motelDetail.number_vacancies_available_in_room,
      full_address: motelDetail.full_address_object,
      isPending : true,
      total_view: 0,
      exact_room_address: motelDetail.exact_room_address,
      created_date: motelDetail.created_date,
      updated_date: motelDetail.updated_date,
    };
    let motel = new Motel(newMotel);
    try {
      const saveMotel = await motel.save();
      if (saveMotel) countDataAdded++;
    } catch (error) {
      console.log(error);
    }
    if (countDataAdded === data.length) {
      console.log("all data added success");
    }
  });
}
module.exports = MigrateMotel;
