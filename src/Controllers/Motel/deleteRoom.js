const { Motel } = require("../../models");

const deleteRoom = async (req, res) => {
  try {
    await Motel.findByIdAndRemove({_id: req.params.id},
      function(err) {
        if (!err) {
        req.flash("success", "Data was deleted");
        res.redirect("/motels/admin");
        }
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteRoom;
