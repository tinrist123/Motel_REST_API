const express = require("express");
const router = express.Router();
const { Role_Controller } = require("../Controllers/index");

//GET ALL ROLES
router.get("/", Role_Controller.getAllRoleUser);

//POST ROLE
router.post("/", Role_Controller.postRoleUser);

//SPECIFIC ROLE
router.get("/:roleUserId", Role_Controller.getRoleUserById);

//DELETE ROLE
router.delete("/:roleUserId", Role_Controller.deleteRoleUser);

//UPDATE ROLE
router.patch("/:roleUserId", Role_Controller.updateRoleUser);

module.exports = router;
