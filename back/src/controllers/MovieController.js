const {
  getAllMovies,
  addMovie,
  findMoviesByTitle,
} = require("./../services/MovieService");

const getMovies = async (req, res) => {
  try {
    const response = await getAllMovies();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const response = await addMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMovies, createMovie };
