const mongoose = require("mongoose");
console.log(process.env.CONNECTION_URL);
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB successfully connected");
  } catch (err) {
    console.log("Error while connection the DB", err);
  }
};
module.exports = connectDB;
