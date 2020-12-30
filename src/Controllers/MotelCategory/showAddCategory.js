const { MotelCategory } = require("../../models");


const showAddCategory = (req,res) => {
    const cate_name ="";
    const room_type ="";
    res.render('../views/categories/add-category.ejs',{
        cate_name: cate_name,
        room_type: room_type,
        message: req.flash('message')
    });
}

module.exports = showAddCategory;
