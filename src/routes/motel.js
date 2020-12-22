//con thieu CUD
const express = require("express");
const Motel = require("../models/Motel");
const router = express.Router();

const { Motel_Controller } = require("../Controllers/index");

//POST MOTEL
router.post("/", Motel_Controller.postRoom);

//GET ALL MOTEL
router.get("/", Motel_Controller.getAllRoom);

//GET ALL MOTEL IS CONFIRMED
router.get("/isConfirm", Motel_Controller.getAllConfirmedRoom);

//POST MOTEL
router.post("/", Motel_Controller.postRoom);

//GET MOTEL BY ID
router.get("/:roomId", Motel_Controller.getMotelById);

//DELETE MOTEL
router.delete("/:roomId", Motel_Controller.deleteRoom);

//UPDATE MOTEL
router.patch("/:roomId", Motel_Controller.UpdateRoom);

module.exports = router;
