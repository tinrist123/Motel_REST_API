const { Motel } = require("../../models");

//SPECIFIC ROOM
const getMotelById = async (req, res) => {
  let response = { success: 0, data: [], message: "" };

  //console.log(req.params.id);
  try {
    const motel = await Motel.findById(req.params.id)
      .populate("util_list")
      .populate("id_motel_host");
    res.set({
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST,   ",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
    });
    if (motel) {
      response.success = 1;
      response.data = motel;
      res.render("motels/edit-motel",{
        id: req.params.id,
        motel_category: motel.motel_category,
        name_motel: motel.name_motel
      });
    }
    
  } catch (err) {
    res.status(404).json({ ...response, message: err });
  }
};

module.exports = getMotelById;
