const { Motel } = require("../../models");

const getRoomsByQuery = async function (req, res) {
  console.log(req.body);
  const {
    matchData,
    current_page,
    page_number,
    place_detail: { district_code },
  } = req.body;
  let response = await Motel.find({
    "full_address.district.code": parseInt(district_code),
  })
    .skip(current_page * page_number)
    .limit(page_number)
    .populate("util_list")
    .populate("motel_category")
    .populate("id_motel_host");
  res.send(response);
};

module.exports = getRoomsByQuery;
