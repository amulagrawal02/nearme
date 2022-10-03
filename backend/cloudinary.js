require("dotenv").config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "douhk5huu",
  api_key: "712122663583381",
  api_secret: "_GtxTlDt1eSwa2ekxYABTUQIw48",
});

module.exports = { cloudinary };
