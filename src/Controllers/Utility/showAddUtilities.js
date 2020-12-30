const { Utilities } = require("../../models");

const showAddUtilities  = (req,res) => {
    const name ="";
    const iconUrl ="";
    const type = "";
    res.render('../views/utilities/add-utility.ejs',{
        name: name,
        iconUrl:iconUrl,
        type:type,
        message: req.flash("message")
    });
}


module.exports = showAddUtilities;