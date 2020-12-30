const { Motel } = require("../../models");

//GET ALL ROOM
const getAllRoom = async function (req, res) {
  try {
    await Motel.find((err,motel) => {
      if (err){
        return console.log(err);
      }
      else {
        //console.log(cate)
        res.render('motels/motels', {
          motel :motel
        })
      }
    });
    //res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllRoom;


 // let response = { success: 0, data: [], message: "" };
  // try {
  //   const motels = await Motel.find({})
  //     .limit(10)
  //     .populate("util_list")
  //     .populate("id_motel_host");
  //   res.set({
  //     "Access-Control-Allow-Credentials": "true",
  //     "Access-Control-Allow-Methods": "GET, POST,   ",
  //     "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  //     "Access-Control-Allow-Origin": "*",
  //   });

  //   if (motels) {
  //     response.success = 1;
  //     response.data = motels;
  //     res.status(200).json(response);
  //   }
  // } catch (err) {
  //   res.status(404).json({ ...response, message: err });
  // }