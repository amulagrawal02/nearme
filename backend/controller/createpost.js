const { cloudinary } = require("../cloudinary");

module.exports.postData = async function (req, res) {
  try {
    //console.log(req);
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.body.file, {
      public_id: "123456", // Set your desired public_id
      folder: "temp", // Set your desired folder in Cloudinary
      resource_type: "auto", // You can set this to 'image' if it's an image
      filename: "amul", // Set the filename
      // Add any other upload options you need here
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
