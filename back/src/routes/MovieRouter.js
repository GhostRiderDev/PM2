const { getMovies } = require("./../controllers/MovieController");
const movierouter = require("express").Router();

movierouter.get("/", getMovies);

module.exports = movierouter;
