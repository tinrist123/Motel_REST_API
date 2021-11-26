const { Motel } = require("../../models");

//UPDATE ROOM
const updateRoom = async (req, res, next) => {
  try {
    const id = req.params.roomId;
    const updates = req.body;
    const option = { new: true };

    const result = await Motel.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRoom;
