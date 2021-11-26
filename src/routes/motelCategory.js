const express = require("express");
const MotelCategory = require("../models/MotelCategory");
const router = express.Router();

const { MotelCategory_Controller } = require("../Controllers/index");

//GET ALL CATEGORIES
router.get("/", MotelCategory_Controller.getAllCate);

//POST UTILITIES
router.post("/", MotelCategory_Controller.postCate);

//SPECIFIC UTILITIES

//DELETE UTILITIES
router.delete("/:categoryId", MotelCategory_Controller.deleteCate);

//UPDATE UTILITIES
router.patch("/:categoryId", MotelCategory_Controller.updateCate);

module.exports = router;
