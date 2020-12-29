const { MotelCategory } = require("../../models");

const getAllCategory = async (req, res) => {
  try {
    await MotelCategory.find((err,cate) => {
      if (err){
        return console.log(err);
      }
      else {
        //console.log(cate)
        res.render('categories/categories', {
          category :cate
        })
      }
    });
    //res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllCategory;
