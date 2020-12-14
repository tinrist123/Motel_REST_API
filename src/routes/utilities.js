const express = require('express');
const Utilities = require('../models/Utilities');
const router = express.Router();
const Controller =  require('../Controllers/index');


//GET ALL UTILITIES
router.get('/', Controller.Utilities_Controller.GetAllUtils);

//POST UTILITIES
router.post('/', Controller.Utilities_Controller.PostUtils);

// //SPECIFIC UTILITIES
router.get('/:utilitiesId', Controller.Utilities_Controller.GetUtilById);

//DELETE UTILITIES
router.delete('/:utilitiesId', Controller.Utilities_Controller.DeleteUtilsById);

//UPDATE UTILITIES
router.patch('/:utilitiesId',Controller.Utilities_Controller.UpdateUtilsById);

module.exports = router;

