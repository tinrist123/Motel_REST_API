const User = require('../models/User');

module.exports = {
    //GET ALL CATEGORIES
    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.json(user);
        } catch(err){
            res.json({message:err});
        }
    },
     
    //POST UTILITIES
    postUser : async (req,res ) => {
        const user = new User ({
            id_role: req.body.id_role,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date_of_birth: req.body.date_of_birth,
            img_url_avatar: req.body.img_url_avatar,
            phone_number: req.body.phone_number,
            address: req.body.address,
            identity_card: req.body.identity_card
        })
        try{
            const result = await user.save();
            res.json(result);
        }
        catch(err) {
            res.json({message: err});
        }
    },
     
     //SPECIFIC UTILITIES
    getUserById: async (req,res) => {  
        try{
            const user = await User.findById(req.params.userId);
            res.json(user);
        } catch(err) { 
            res.json({message: err});
        }
    }, 
     
     //DELETE UTILITIES
    deleteUser: async (req,res) => {
        try{
            const deleteUser = await User.remove({_id : req.params.userId});
            res.json(deleteUser);
        } catch(err) {
            res.json({message: err});
        }
    },

    //UPDATE USER
    updateUser : async (req,res,next) => {
        try {
            const id = req.params.userId;
            const updates = req.body;
            const option = { new: true };
    
            const result = await User.findByIdAndUpdate(id, updates, option);
            res.send(result);
        } catch (err) {
            res.json({message: err});
        }
    } 
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

