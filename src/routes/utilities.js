const express = require("express");
const router = express.Router();
const { Utilities_Controller } = require("../Controllers");

//GET ALL UTILITIES
router.get("/", Utilities_Controller.getAllUtilities);

//POST UTILITIES
router.post("/", Utilities_Controller.postUtility);

//DELETE UTILITIES
router.delete("/:utilitiesId", Utilities_Controller.deleteUtility);

//UPDATE UTILITIES
router.patch("/:utilitiesId", Utilities_Controller.updateUtility);

module.exports = router;
