const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 1998,
    },
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
