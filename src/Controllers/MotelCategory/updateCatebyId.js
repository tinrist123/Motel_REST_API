const { MotelCategory } = require("../../models");

const updateCateById = async function (req, res) {
  try {
    const id = req.body.id;
    
    const updates = {
      cate_name: req.body.cate_name,
      room_type: req.body.room_type,
    }
    console.log(updates)
    const option = { new: true };
    const result = await MotelCategory.findByIdAndUpdate(id, updates, option);
    //res.send(result);
    req.flash("message","Category Successfully Edited !");
    res.redirect("/categories/admin/edit-category/" +id);

  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateCateById;

// async (req, res, next) => {
//   try {
//     const id = req.params.categoryId;
//     const updates = req.body;
//     const option = { new: true };

//     const result = await MotelCategory.findByIdAndUpdate(id, updates, option);
//     res.status(200).send(result);
//   } catch (err) {
//     res.status(404).json({ message: err });
//   }
