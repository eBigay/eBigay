const jwt = require("jsonwebtoken");
const User = require("../model/User");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.user = await User.findById(decoded.UserInfo._id).select(
      "_id username email location"
    );
    req.roles = decoded.UserInfo.roles;
    next();
  });
};

module.exports = verifyJWT;
