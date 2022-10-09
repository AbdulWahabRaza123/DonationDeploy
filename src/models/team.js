const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  Image: {
    data: Buffer,
    contentType: String,
  },
});
const Team = new mongoose.model("Team", formSchema);
module.exports = Team;
