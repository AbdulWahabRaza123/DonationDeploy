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
const Video = new mongoose.model("Video", UserSchema);
module.exports = Video;
