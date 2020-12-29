//con thieu CUD
const express = require("express");
const Motel = require("../models/Motel");
const router = express.Router();

const { Motel_Controller } = require("../Controllers/index");

//POST MOTEL
router.post("/", Motel_Controller.postRoom);

//GET ALL MOTEL
router.get("/admin", Motel_Controller.getAllRoom);

//GET ALL MOTEL IS CONFIRMED
router.get("/admin/show-confirmed-motel", Motel_Controller.getAllConfirmedRoom);

//POST MOTEL
router.post("/", Motel_Controller.postRoom);

//GET MOTEL BY ID
// router.get("/:roomId", Motel_Controller.getMotelById);

//DELETE MOTEL
router.get("/admin/delete-motel/:id", Motel_Controller.deleteRoom);

//UPDATE MOTEL
router.get("/admin/edit-motel/:id", Motel_Controller.getMotelById);

//
router.get("/admin/all-pending-motel", Motel_Controller.getAllPendingRoom);


router.get("/admin/confirm-room/:id", Motel_Controller.confirmRoom)

module.exports = router;
