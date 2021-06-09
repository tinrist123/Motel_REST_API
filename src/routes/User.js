const express = require("express");
const router = express.Router();
const { getRecsUser } = require("../Controllers");

router.get("/recs", getRecsUser);

module.exports = router;
