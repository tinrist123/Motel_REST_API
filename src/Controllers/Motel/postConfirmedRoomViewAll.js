const { Motel } = require("../../models");

const postConfirmedRoomViewAll = async function (req, res) {
  const {
    matchData: { current_page, page_number },
  } = req.body;
  let response = await Motel.find({ isConfirmed: true })
    .skip(current_page * page_number)
    .populate("motel_category")
    .limit(page_number);

  res.send(response);
};

module.exports = postConfirmedRoomViewAll;
