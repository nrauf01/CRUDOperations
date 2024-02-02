const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
});

module.exports = new mongoose.model("User", UserSchema);
