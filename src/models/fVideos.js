const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const FVideo = new mongoose.model("FVideo", UserSchema);
module.exports = FVideo;
