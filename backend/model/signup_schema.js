const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "nearme_user_profile/a9b4ff536eef5dd11dee3d55ae5b2f6f",
  },
});

signupSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", signupSchema);
module.exports = User;
