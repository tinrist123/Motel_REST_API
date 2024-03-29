const { Motel } = require("../../models");

//SPECIFIC ROOM
const getMotelById = async (req, res) => {
  let response = { success: 0, data: [], message: "" };
  try {
    const motel = await Motel.findById(req.params.roomId)
      .populate("util_list")
      .populate("motel_category")
      .populate("id_motel_host");
    if (motel) {
      response.success = 1;
      response.data = motel;
      res.json(response);
    }
  } catch (err) {
    res.status(404).json({ ...response, message: err });
  }
};

module.exports = getMotelById;
