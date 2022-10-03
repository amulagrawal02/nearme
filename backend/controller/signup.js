const { cloudinary } = require("../cloudinary");
const User = require("../model/signup_schema");
module.exports.getData = async function (req, res) {
  // Inital we don't perform this operation
  // for uploading image in cloudinary
  // try {
  //   const fileStr = req.body.profile;
  //   const uploadResponse = await cloudinary.uploader.upload(fileStr, {
  //     upload_preset: "unsigned_preset",
  //   });
  //   console.log(uploadResponse);
  //   res.json({ msg: "file uploaded " });
  // } catch (error) {
  //   console.log("err while uploading", error);
  //   res.status(500).json({ err: "err while uploading" });
  // }
  const { name, profile, email, password } = req.body;
  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });
    return res.status(200).json({ msg: "user added sucessfully" });
  } catch (error) {
    console.log("error while adding new user", error);
  }
};
