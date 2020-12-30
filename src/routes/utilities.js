const express = require("express");
const router = express.Router();
const { Utilities_Controller } = require("../Controllers");

//GET ALL UTILITIES
router.get("/admin", Utilities_Controller.getAllUtilities);

//POST UTILITIES
router.get("/admin/add-utility", Utilities_Controller.showAddUtilities);

router.post("/admin/add-utility", Utilities_Controller.postUtility);

//DELETE UTILITIES
router.get("/admin/delete-utility/:utilitiesId", Utilities_Controller.deleteUtility);

//UPDATE UTILITIES
router.get("/admin/edit-utility/:utilitiesId", Utilities_Controller.getUtilityById);


router.post("/admin/edit-utility/:utilitiesId", Utilities_Controller.updateUtility);

module.exports = router;
