const Utilities = require('../models/Utilities');

module.exports = {
    GetAllUtils : async function(req,res){
        try{
            const utilities = await Utilities.find();
            res.json(utilities);
        } catch(err){
            res.json({message:err});
        }
    },

    PostUtils : async (req,res) => {
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
    },

    GetUtilById : async function(req,res){
        try{
            const deleteUtilities = await Utilities.find({_id : req.params.utilitiesId});
            res.json(deleteUtilities);
        } catch(err) {
            res.json({message: err});
        }
    },

    UpdateUtilsById : async (req,res,next) => {
        try {
            const id = req.params.utilitiesId;
            const updates = req.body;
            const option = { new: true };
    
            const result = await Utilities.findByIdAndUpdate(id, updates, option);
            res.send(result);
        } catch (err) {
            res.json({message: err});
        }
    },

    DeleteUtilsById : async function(req,res){
        try{
            const deleteUtilities = await Utilities.remove({_id : req.params.utilitiesId});
            res.json(deleteUtilities);
        } catch(err) {
            res.json({message: err});
        }
    }
}

