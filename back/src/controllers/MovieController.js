const {
  getAllMovies,
  addMovie,
  findMoviesByTitle,
} = require("./../services/MovieService");

const getMovies = (req, res) => {
  res.send(getAllMovies());
};

module.exports = { getMovies };
