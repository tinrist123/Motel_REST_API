const { Motel } = require("../../models");

const deleteRoom = async (req, res) => {
  try {
    const deleteRoom = await Motel.remove({ _id: req.params.roomId });
    res.json(deleteRoom);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = deleteRoom;
