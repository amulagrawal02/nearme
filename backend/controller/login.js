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

// for validate jwt token or fetch the data for particular token
module.exports.getData = async function (req, res) {
  const tkn = req.body.token;
  console.log(tkn);
  await jwt.verify(tkn, "nearme", async (err, decoded) => {
    if (err) {
      console.log("Invaild token while visting profile page");
      return res.status(400).json({ status: false, err: "invalid token" });
    }
    const id = decoded.id;
    const person = await user.findById(id);
    return res.status(200).json({
      status: true,
      email: person.email,
      name: person.name,
      id: person.id,
    });
  });
};
