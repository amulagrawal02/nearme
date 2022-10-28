const express = require("express");
const router = express.Router();
const user = require("../controller/login");
router.post("/data", user.loginUser);
router.post("/getData", user.getData);
module.exports = router;
