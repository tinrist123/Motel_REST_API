const { json } = require("body-parser");

const { Utilities } = require("../../models");

const postUtils = async (req, res) => {
  new Utilities({
    name : req.body.name,
    iconUrl  : req.body.iconUrl,
    type   : req.body.type,
  }).save(function(err, prd){
    if(err) res.json(err);
    else { 
      req.flash("message","Utility Successfully Added !");
      res.redirect("./add-utility");
    } 
  });
};
module.exports = postUtils;



// var name = req.body.name;
  // var iconUrl = req.body.iconUrl;
  // var type = req.body.type;
  // console.log(req.body);

  // const utility = new Utilities({
  //   name:  name,
  //   iconUrl: iconUrl,
  //   type: type,
  // });
  // try {
  //     const saveUtility = await utility.save();
  //     res.status(200).json(saveUtility);
  //     res.reload('/utilities/admin');
  // } catch (err) {
  //   res.status(404).json({ message: err });
  // }
