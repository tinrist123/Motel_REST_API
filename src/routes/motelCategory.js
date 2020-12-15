const express = require('express');
const MotelCategory = require('../models/MotelCategory');
const router = express.Router();

const Controller = require('../Controllers/index');
const Utilities = require('../models/Utilities');


//GET ALL CATEGORIES
router.get('/', Controller.MotelCategory_Controller.GetAllCategory);

//POST UTILITIES
router.post('/', Controller.MotelCategory_Controller.PostCategory);

//SPECIFIC UTILITIES
router.get('/:categoryId', Controller.MotelCategory_Controller.GetCategoryById);

//DELETE UTILITIES
router.delete('/:categoryId', Controller.MotelCategory_Controller.DeleteCateById);

//UPDATE UTILITIES
router.patch('/:categoryId', Controller.MotelCategory_Controller.UpdateCateById);

module.exports = router;

