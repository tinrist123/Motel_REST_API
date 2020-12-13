const express = require('express');
const Utilities = require('../models/Utilities');
const router = express.Router();



//GET ALL UTILITIES
router.get('/', async (req, res) => {
   try{
       const utilities = await Utilities.find();
       res.json(utilities);
   } catch(err){
       res.json({message:err});
   }
});

//POST UTILITIES
router.post('/', async (req,res) => {
    //console.log(req.body);
    const utilities = new Utilities({
        name: req.body.name,
        iconUrl: req.body.iconUrl,
        type: req.body.type,
    })
    try{
        const saveUtilities = await utilities.save();
        res.json(saveUtilities);
    }
    catch(err){
        res.json({message: err})
    };
});

//SPECIFIC UTILITIES
router.get('/:utilitiesId', async (req,res) => {
    try{
        const utilities = await Utilities.findById(req.params.utilitiesId);
        res.json(utilities);
    } catch(err) { 
        res.json({message: err});
    }
} )

//DELETE UTILITIES
router.delete('/:utilitiesId', async (req,res) => {
    try{
        const deleteUtilities = await Utilities.remove({_id : req.params.utilitiesId});
        res.json(deleteUtilities);
    } catch(err) {
        res.json({message: err});
    }
})


//UPDATE UTILITIES
router.patch('/:utilitiesId',async (req,res) => {
    try{
        const updateUtilities = await Utilities.updateOne(
            { _id: req.params.utilitiesId }, 
            { $set : { name : req.body.name , type: req.body.type}, });
        res.json(updateUtilities);
    } catch(err){
        res.json({message: err})
    }
})


module.exports = router;

