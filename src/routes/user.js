const express = require("express");
const router = express.Router();

const { User_Controller } = require("../Controllers/index");

router.get("/", User_Controller.getAllUser);

router.post("/", User_Controller.postUser);

router.get("/:userId", User_Controller.getUserById);

router.delete("/:userId", User_Controller.deleteUser);

router.patch("/:userId", User_Controller.updateUser);

module.exports = router;
