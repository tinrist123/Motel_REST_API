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





// //SPECIFIC UTILITIES
// router.get('/:utilitiesId', async (req,res) => {
//     try{
//         const utilities = await Utilities.findById(req.params.utilitiesId);
//         res.json(utilities);
//     } catch(err) { 
//         res.json({message: err});
//     }
// } )

// //DELETE UTILITIES
// router.delete('/:utilitiesId', async (req,res) => {
//     try{
//         const deleteUtilities = await Utilities.remove({_id : req.params.utilitiesId});
//         res.json(deleteUtilities);
//     } catch(err) {
//         res.json({message: err});
//     }
// })


// //UPDATE UTILITIES
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

