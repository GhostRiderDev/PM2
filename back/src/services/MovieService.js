const tempData = require("./../repository/tempData");

const getAllMovies = () => {
  // return array of all movies
  return tempData;
};

const findMoviesByTitle = (param) => {
  // return all movies that in its title contains param
  return tempData.filter((movie) => movie.title.includes(param));
};

const addMovie = (movie) => {
  // push movie param to tempData array
  tempData.push(movie);
  // return new size of array tempData after add new movie
  return tempData.length;
};

module.exports = { getAllMovies, findMoviesByTitle, addMovie };
