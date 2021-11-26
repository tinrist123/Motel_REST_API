const { Motel } = require("../../models");

//POST ROOM
const postRoom = async (req, res) => {
  const room = new Motel({
    motel_category: req.body.motel_category,
    name_motel: req.body.name_motel,
    room_price: req.body.room_price,
    electric_price: req.body.electric_price,
    water_price: req.body.water_price,
    wifi_cost: req.body.wifi_cost,
    parking_fee: req.body.parking_fee,
    isConfirmed: req.body.isConfirmed,
    square: req.body.square,
    deposit: req.body.deposit,
    number_vacancies_available_in_room:
      req.body.number_vacancies_available_in_room,
    exact_room_address: req.body.exact_room_address,
    full_address: req.body.full_address,
    util_list: req.body.util_list,
    sex_allowed: req.body.sex_allowed,
    total_view: req.body.total_view,
    prominent: req.body.prominent,
    more_description: req.body.more_description,
    imgUrl_list: req.body.imgUrl_list,
    room_is_shared: req.body.room_is_shared,
  });
  try {
    const saveRoom = await room.save();
    res.json(saveRoom);
  } catch (err) {
    res.json({ message: err });
  }
};
module.exports = postRoom;
