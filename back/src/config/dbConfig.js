require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  return await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connectToDB;
