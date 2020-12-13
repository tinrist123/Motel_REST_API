const express = require('express');
const RoleUser = require('../models/RoleUser');
const router = express.Router();



//GET ALL CATEGORIES
router.get('/', async (req, res) => {
   try{
       const role = await RoleUser.find();
       res.json(role);
   } catch(err){
       res.json({message:err});
   }
});

//POST UTILITIES
router.post('/', async (req,res) => {
    //console.log(req.body);
    const role = new RoleUser({
        name_role: req.body.name_role,
        note: req.body.note,
    })
    try{
        const saveRoleUser = await role.save();
        res.json(saveRoleUser);
    }
    catch(err){
        res.json({message: err})
    };
});

//SPECIFIC UTILITIES
router.get('/:roleUserId', async (req,res) => {
    try{
        const role = await RoleUser.findById(req.params.roleUserId);
        res.json(role);
    } catch(err) { 
        res.json({message: err});
    }
} )

//DELETE UTILITIES
router.delete('/:roleUserId', async (req,res) => {
    try{
        const deleteRole = await RoleUser.remove({_id : req.params.roleUserId});
        res.json(deleteRole);
    } catch(err) {
        res.json({message: err});
    }
})


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

