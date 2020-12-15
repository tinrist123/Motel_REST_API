//con thieu CUD
const express = require('express');
const Motel = require('../models/Motel');
const router = express.Router();

const Controller = require('../Controllers/index');

//POST MOTEL
//router.post('/', Motel_Controller.getAllRoom);


//GET ALL MOTEL
router.get('/', Controller.Motel_Controller.getAllRoom);

//GET ALL MOTEL IS CONFIRMED
router.get('/isConfirm', Controller.Motel_Controller.getAllConfirmedRoom);

//POST MOTEL
router.post('/', Controller.Motel_Controller.postRoom);

//GET MOTEL BY ID
router.get('/:roomId', Controller.Motel_Controller.getMotelById);

//DELETE MOTEL
router.delete('/:roomId', Controller.Motel_Controller.deleteRoom);

//UPDATE MOTEL
router.patch('/:roomId', Controller.Motel_Controller.updateRoom);

module.exports = router;

