const { addCardsToSlider, animateCarousel } = require("./../Carousel");
const { tempData } = require("./../tempData");
const axios = require("axios");

async function render() {
  const dataApi = await getMovies();
  console.log(dataApi, "hello");
  addCardsToSlider(tempData);
  animateCarousel(".carousel .carousel-item");
  animateCarousel(".expand .carousel-item");
}

const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://students-api.2.us-1.fl0.io/movies"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { render };
