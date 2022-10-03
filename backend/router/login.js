const express = require("express");
const router = express.Router();
const user = require("../controller/login");
router.post("/data", user.loginUser);
module.exports = router;
