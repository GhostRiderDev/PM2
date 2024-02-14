const { addCardsToSlider, animateCarousel } = require("./../Carousel");
const { tempData } = require("./../tempData");
const axios = require("axios");

async function render() {
  const dataApi = await getMovies();
  addCardsToSlider(dataApi);
  animateCarousel(".carousel .carousel-item");
  animateCarousel(".expand .carousel-item");
}

const getMovies = async () => {
  try {
    const response = await axios.get("http://localhost:8888/movies");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { render };
