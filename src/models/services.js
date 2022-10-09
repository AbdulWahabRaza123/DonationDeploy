const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  newsContent: {
    type: String,
    required: true,
  },
});
const Services = new mongoose.model("Services", UserSchema);
module.exports = Services;
