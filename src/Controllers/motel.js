const Motel = require('../models/Motel');

module.exports = {
    getAllRoom : async function(req,res){
        try{
            const motel = await Motel.find();
            res.json(motel);
        } catch(err){
            res.json({ message: err });
        }
    },

    getAllConfirmedRoom : async function(req,res){
        try{
            const motel = await Motel.find( {isConfirmed : true} );
            res.json(motel);
        } catch(err){
            res.json({ message: err });
        }
    }

}

