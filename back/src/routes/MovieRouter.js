const { getMovies, createMovie } = require("./../controllers/MovieController");
const movierouter = require("express").Router();

movierouter.get("/", getMovies);
movierouter.post("/", createMovie);

module.exports = movierouter;
