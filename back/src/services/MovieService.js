const tempData = require("./../repository/tempData");
const movieModel = require("./../model/Movie");

const getAllMovies = async () => {
  // return array of all movies
  return await movieModel.find({});
};

const findMoviesByTitle = (param) => {
  // return all movies that in its title contains param
  return tempData.filter((movie) => movie.title.includes(param));
};

const addMovie = async (movieToSave) => {
  // push movie param to tempData array
  const movie = new movieModel(movieToSave);
  const movieSaved = await movie.save();
  // return new size of array tempData after add new movie
  return movieSaved;
};

module.exports = { getAllMovies, findMoviesByTitle, addMovie };
