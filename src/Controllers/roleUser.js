const RoleUser = require('../models/RoleUser');


module.exports = {
    //GET ALL CATEGORIES

    getAllRoleUser: async (req, res) => {
        try{
            const role = await RoleUser.find();
            res.json(role);
        } catch(err){
            res.json({message:err});
        }
    },
     
     //POST UTILITIES
    postRoleUser : async (req,res) => {
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
    },
     
     //SPECIFIC UTILITIES
    getRoleUserById: async (req,res) => {
         try{
             const role = await RoleUser.findById(req.params.roleUserId);
             res.json(role);
         } catch(err) { 
             res.json({message: err});
         }
    }, 
     
     //DELETE UTILITIES
    deleteRoleUser: async (req,res) => {
         try{
             const deleteRole = await RoleUser.remove({_id : req.params.roleUserId});
             res.json(deleteRole);
         } catch(err) {
             res.json({message: err});
         }
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

