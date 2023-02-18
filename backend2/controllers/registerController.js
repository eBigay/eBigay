const User = require("../model/User");
const bcrypt = require("bcrypt");
const { handleLogin } = require("./authController");

const handleNewUser = async (req, res) => {
  const { username, password, imageUrl, location, email, phoneNumber } =
    req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    await User.create({
      username: username,
      password: hashedPwd,
      imageUrl: imageUrl,
      location: location,
      email: email,
      phoneNumber: phoneNumber,
    });

    handleLogin(req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
