const express = require("express");
const MotelCategory = require("../models/MotelCategory");
const router = express.Router();

const { MotelCategory_Controller } = require("../Controllers/index");

//GET ALL CATEGORIES
router.get("/admin", MotelCategory_Controller.getAllCate);

router.get("/admin/add-category",MotelCategory_Controller.showAddCategory);


//POST UTILITIES
router.post("/admin/add-category", MotelCategory_Controller.postCate);

//SPECIFIC UTILITIES
router.get("/admin/edit-category/:id", MotelCategory_Controller.getCateById);


//DELETE UTILITIES
router.get("/admin/delete-category/:id", MotelCategory_Controller.deleteCate);

//UPDATE UTILITIES
router.post("/admin/edit-category/:id", MotelCategory_Controller.updateCate);

module.exports = router;
