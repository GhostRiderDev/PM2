const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  year: {
    type: Number,
    min: [1000, "Movie year not could be lower than 1000"],
  },
  director: String,
  duration: String,
  genre: [String],
  rate: {
    type: Number,
    min: [1.0, "Rate not could bet lower than 1.0"],
    max: [10.0, "Rate not could bet grether than 10.0"],
  },
  poster: String,
});

const movieModel = mongoose.model("Movie", MovieSchema);

module.exports = movieModel;
