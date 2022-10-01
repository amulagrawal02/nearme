const express = require("express");
const router = express.Router();
const signup = require("../controller/signup");

router.post("/data", signup.getData);

module.exports = router;
