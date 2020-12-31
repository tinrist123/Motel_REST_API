//con thieu CUD
const express = require("express");
const Motel = require("../models/Motel");
const router = express.Router();
const mongoose = require("mongoose");

const { Motel_Controller } = require("../Controllers/index");

//GET MOTEL BY ID
router.get("/detail/:roomId", Motel_Controller.getMotelById);

//POST PAYLOAD TO GET ROOM BY QUEYR
router.post("/search", Motel_Controller.getRoomsByQuery);

//POST MOTEL
router.post("/view-all", Motel_Controller.postRoomViewAll);

//POST MOTEL
// router.post("/", Motel_Controller.postRoom);

//GET ALL MOTEL
router.get("/all", Motel_Controller.getAllRoom);

//GET ALL MOTEL IS CONFIRMED
router.get("/isConfirm", Motel_Controller.getAllConfirmedRoom);

router.post("/search/filter", Motel_Controller.PostRoomFilter);
// POST PAYLOAD TO FIND CONFIRMED ROOM ACCURATE
// router.post("/isConfirmed/view-all", Motel_Controller.postConfirmedRoomViewAll);

//POST MOTEL
// router.post("/", Motel_Controller.postRoom);

//POST MOTEL HAVE FILTER

//DELETE MOTEL
// router.delete("/:roomId", Motel_Controller.deleteRoom);

//UPDATE MOTEL
// router.patch("/:roomId", Motel_Controller.UpdateRoom);

// router.get("/test", async (req, res, next) => {
//   let builder = Motel.find();
//   let result = await builder
//     .populate({
//       path: "util_list",
//       util_list: { $elemMatch: { type: { $all: ["asfdaskjdf"] } } },
//     })
//     .limit(10)
//     .exec();

//   res.send(result);
// });

module.exports = router;
