const { createItem } = require("./ItemCarrusel");
const { renderSingleMovie } = require("./MovieFull");

function addCardsToSlider(data) {
  const carousels = ["best-movies", "main-movies"];
  carousels.forEach((carousel) => {
    const slider = $(`#${carousel}`);
    data.forEach((movie) => {
      const card = createItem(movie);
      card.href = `#${movie._id}`;

      card.addEventListener("click", () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          section.style.setProperty("display", "none");
        });
        document.documentElement.style.setProperty("--display-poster", "none");
        document.getElementById("info-movie").style.display = "block";
        renderSingleMovie(movie);
      });

      slider.owlCarousel("add", card).owlCarousel("update");
    });
  });
}

module.exports = {
  addCardsToSlider,
};
