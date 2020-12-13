const express = require('express');
const MotelCategory = require('../models/MotelCategory');
const router = express.Router();



//GET ALL CATEGORIES
router.get('/', async (req, res) => {
   try{
       const category = await MotelCategory.find();
       res.json(category);
   } catch(err){
       res.json({message:err});
   }
});

//POST UTILITIES
router.post('/', async (req,res) => {
    //console.log(req.body);
    const category = new MotelCategory({
        cate_name: req.body.cate_name,
        room_type: req.body.room_type,
    })
    try{
        const saveUtilities = await category.save();
        res.json(saveUtilities);
    }
    catch(err){
        res.json({message: err})
    };
});

//SPECIFIC UTILITIES
router.get('/:categoryId', async (req,res) => {
    try{
        const category = await MotelCategory.findById(req.params.categoryId);
        res.json(category);
    } catch(err) { 
        res.json({message: err});
    }
} )

//DELETE UTILITIES
router.delete('/:categoryId', async (req,res) => {
    try{
        const deleteCategory = await MotelCategory.remove({_id : req.params.categoryId});
        res.json(deleteCategory);
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

