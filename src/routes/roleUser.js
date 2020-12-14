const express = require('express');
const RoleUser = require('../models/RoleUser');
const router = express.Router();
const Controller = require('../Controllers/index')


//GET ALL CATEGORIES
router.get('/', Controller.Role_Controller.getAllRoleUser);

//POST UTILITIES
router.post('/', Controller.Role_Controller.postRoleUser);

//SPECIFIC UTILITIES
router.get('/:roleUserId',Controller.Role_Controller.getRoleUserById);

//DELETE UTILITIES
router.delete('/:roleUserId', Controller.Role_Controller.deleteRoleUser);


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

