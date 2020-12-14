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

    PostUtils : async function(req,res){
        async (req,res) => {
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
        }
    },

    GetUtilById : async function(req,res){
        try{
            const deleteUtilities = await Utilities.remove({_id : req.params.utilitiesId});
            res.json(deleteUtilities);
        } catch(err) {
            res.json({message: err});
        }
    },

    UpdateUtilsById : async function(req,res){
        try{
            const updateUtilities = await Utilities.updateOne(
                { _id: req.params.utilitiesId }, 
                { $set : { name : req.body.name , type: req.body.type}, });
            res.json(updateUtilities);
        } catch(err){
            res.json({message: err})
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

