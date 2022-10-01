const express = require("express");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");
const signup = require("./router/signup");
dotenv.config();
connectDB();
app.use(cors());
app.use(
  fileupload({
    createParentPath: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/signup/data", async (req, res) => {
//   console.log(req.files);
//   console.log(req.body.name);
// });
app.use("/signup", signup);
app.listen(8000, () => {
  console.log("server start serving at port", 8000);
});
