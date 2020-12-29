const { Motel } = require("../../models");

const confirmRoom = async function (req, res) {
  try {
    const id = req.params.id;

    Motel.findOne({_id: id}, (err,motel) => {
      motel.isConfirmed  = true;
      motel.isPending = false;

      motel.save((err, motel) =>{
        if(err){
          res.send(err);
        }
        else {
          //req.flash("message","Room Successfully Confirmed !");
          res.redirect("/motels/admin/all-pending-motel");
        }
      })
    })
    
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = confirmRoom;

  //const option = { new: true };
  //const result = await Motel.updateMany(id, {isPending:false, isConfirm: true});
  //res.send(result);
