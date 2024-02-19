//? user: cos4h
//? password: sehenswürdigkeiten

const mongoose = require("mongoose");

const URL_DB =
  "mongodb+srv://cos4h:sehenswürdigkeiten@henry.olcz0jp.mongodb.net/cinema?retryWrites=true&w=majority";

const connectToDB = async () => {
  return await mongoose.connect(URL_DB);
};

module.exports = connectToDB;
