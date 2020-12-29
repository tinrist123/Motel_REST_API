const { Motel } = require("../../models");
//GET ALL ROOM
const getAllPendingRoom = async function (req, res) {
    try {
      await Motel.find({isPending: true},(err,motel) => {
        if (err){
          return console.log(err);
        }
        else {
          //console.log(cate)
          res.render('motels/is-pending-motel', {
            motel :motel
          })
        }
      });
      //res.status(200).json(category);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  };
  

module.exports = getAllPendingRoom;
