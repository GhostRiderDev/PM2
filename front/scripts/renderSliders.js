const { getMovies } = require("./service/movie.js");
const { addCardsToSlider } = require("./Carousel.js");

async function render() {
  const dataApi = await getMovies();
  addCardsToSlider(dataApi);
}

module.exports = { render };
