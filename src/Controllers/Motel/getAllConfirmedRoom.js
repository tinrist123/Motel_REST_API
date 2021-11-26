const { Motel } = require("../../models");
//GET ALL ROOM
const getAllConfirmedRoom = async function (req, res) {
  let response = { success: 0, data: [], message: "" };
  try {
    const motel = await Motel.find({ isConfirmed: true })
      .limit(7)
      .populate("util_list")
      .populate("motel_category")
      .populate("id_motel_host");

    if (motel) {
      response.success = 1;
      response.data = motel;
      res.json(response);
    }
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllConfirmedRoom;
