const { Motel } = require("../../models");

const postRoomViewAll = async function (req, res) {
  const { matchData, current_page, page_number } = req.body;
  try {
    let response = await Motel.find({ ...matchData })
      .sort({ created_date: "descending" })
      .skip(current_page * page_number)
      .limit(page_number)
      .populate("motel_category");
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(404);
  }
};

module.exports = postRoomViewAll;
