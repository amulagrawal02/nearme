const { cloudinary } = require("../cloudinary");
module.exports.getData = async function (req, res) {
  // for uploading image in cloudinary
  try {
    const fileStr = req.body.profile;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "unsigned_preset",
    });
    console.log(uploadResponse);
    res.json({ msg: "file uploaded " });
  } catch (error) {
    console.log("err while uploading", error);
    res.status(500).json({ err: "err while uploading" });
  }
};
