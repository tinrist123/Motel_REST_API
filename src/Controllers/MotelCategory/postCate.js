const { MotelCategory } = require("../../models");

const postCategory = async (req, res) => {
  console.log(req.body);
  new MotelCategory({
    cate_name: req.body.cate_name,
    room_type: req.body.room_type,
  }).save(function(err, prd){
    if(err) res.json(err);
    else { 
      req.flash("message","Category Successfully Added !");
      res.redirect("./add-category");
    } 
  });
};

module.exports = postCategory;
