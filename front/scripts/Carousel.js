const { createItem } = require("./ItemCarrusel");

function addCardsToSlider(data) {
  const carousels = ["best-movies", "main-movies"];
  carousels.forEach((carousel) => {
    const slider = $(`#${carousel}`);
    data.forEach((movie) => {
      const card = createItem(movie);
      slider.owlCarousel("add", card).owlCarousel("update");
    });
  });
}

module.exports = {
  addCardsToSlider,
};
