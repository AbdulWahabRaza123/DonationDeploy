const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  No: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
  },
  Image: {
    data: Buffer,
    contentType: String,
  },
});
const CImg = new mongoose.model("ImageData", formSchema);
module.exports = CImg;
