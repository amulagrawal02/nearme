const express = require("express");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
dotenv.config();
connectDB();
app.listen(8000, () => {
  console.log("server start serving at port", 8000);
});
