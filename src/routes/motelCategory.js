const express = require('express');
const MotelCategory = require('../models/MotelCategory');
const router = express.Router();

const Controller = require('../Controllers/index');


//GET ALL CATEGORIES
router.get('/', Controller.MotelCategory_Controller.GetAllCategory);

//POST UTILITIES
router.post('/', Controller.MotelCategory_Controller.PostCategory);

//SPECIFIC UTILITIES
router.get('/:categoryId', Controller.MotelCategory_Controller.GetCategoryById);

//DELETE UTILITIES
router.delete('/:categoryId', Controller.MotelCategory_Controller.DeleteCateById);


//UPDATE UTILITIES
// router.patch('/:utilitiesId',async (req,res) => {
//     try{
//         const updateUtilities = await Utilities.updateOne(
//             { _id: req.params.utilitiesId }, 
//             { $set : { name : req.body.name , type: req.body.type}, });
//         res.json(updateUtilities);
//     } catch(err){
//         res.json({message: err})
//     }
// })


module.exports = router;

