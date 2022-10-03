const express = require("express");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");
const signup = require("./router/signup");
const cloudinary = require("cloudinary").v2;

dotenv.config();

connectDB();
app.use(cors());
app.use(
  fileupload({
    createParentPath: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/signup", signup);
app.listen(8000, () => {
  console.log("server start serving at port", 8000);
});
