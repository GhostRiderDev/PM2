const axios = require("axios");

const BASE_URL = "http://localhost:8888/movies";

const getMovies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const addMovie = async (movieToPost) => {
  try {
    const response = await axios.post(BASE_URL, movieToPost);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = { addMovie, getMovies };
