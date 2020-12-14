const User = require('../models/User');


module.exports = {
    //GET ALL CATEGORIES

    getAllUser: async (req, res) => {
        try{
            const user = await User.find();
            res.json(user);
        } catch(err){
            res.json({message:err});
        }
    },
     
     //POST UTILITIES
    postRoleUser : async (req,res) => {
         
    },
     
     //SPECIFIC UTILITIES
    getRoleUserById: async (req,res) => {
        
    }, 
     
     //DELETE UTILITIES
    deleteRoleUser: async (req,res) => {
         
    },
}


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

