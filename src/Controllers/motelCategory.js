const MotelCategory = require('../models/MotelCategory');


module.exports = {
    GetAllCategory : async (req, res) => {
        try{
            const category = await MotelCategory.find();
            res.json(category);
        } catch(err){
            res.json({message:err});
        }
     },

    PostCategory : async (req,res) => {
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
    },

    GetCategoryById : async (req,res) => {
        try{
            const category = await MotelCategory.findById(req.params.categoryId);
            res.json(category);
        } catch(err) { 
            res.json({message: err});
        }
    },

    UpdateCateById : async (req,res,next) => {
        try {
            const id = req.params.categoryId;
            const updates = req.body;
            const option = { new: true };
    
            const result = await MotelCategory.findByIdAndUpdate(id, updates, option);
            res.send(result);
        } catch (err) {
            res.json({message: err});
        }
    },

    DeleteCateById : async (req,res) => {
        try{
            const deleteCategory = await MotelCategory.remove({_id : req.params.categoryId});
            res.json(deleteCategory);
        } catch(err) {
            res.json({message: err});
        }
    }
}

