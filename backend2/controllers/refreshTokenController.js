const User = require("../model/User");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  console.log("cook", cookies);
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  console.log("token", refreshToken);
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);

    const roles = Object.values(foundUser.roles);
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    const user = {
      _id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
      imageUrl: foundUser.imageUrl,
      location: foundUser.location,
      phoneNumber: foundUser.phoneNumber,
    };

    res.json({ roles, accessToken, user });
  });
};

module.exports = { handleRefreshToken };
