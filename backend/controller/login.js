const bcrypt = require("bcrypt");
const user = require("../model/signup_schema");
const jwt = require("jsonwebtoken");
// for logging the user
module.exports.loginUser = async function (req, res) {
  const person = await user.findOne({ email: req.body.email });
  if (!person) {
    console.log("user not found with this email");
    res.json({ token: false, user: "" });
  }
  const status = await bcrypt.compare(req.body.password, person.password);
  if (!status) {
    console.log("Wrong password while logging");
    res.json({ token: false, user: "" });
  } else {
    console.log(person);
    const token = jwt.sign({ id: person.id }, "nearme");
    console.log(token);
    res.json({
      token,
      user: {
        email: req.body.email,
        id: person.id,
      },
    });
  }
};
