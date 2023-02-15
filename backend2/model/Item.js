const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  category: {
    type: String,
    required: true,
  },

  location: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Object,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
