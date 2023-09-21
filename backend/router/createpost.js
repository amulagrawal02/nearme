const express = require('express')
const router = express.Router();

const createpost = require("../controller/createpost");

router.post("/" , createpost.postData);

module.exports  = router