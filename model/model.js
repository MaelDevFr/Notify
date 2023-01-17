const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  id: String,
  dateOfCreation: Date,
});

module.exports = mongoose.model("user", User);
