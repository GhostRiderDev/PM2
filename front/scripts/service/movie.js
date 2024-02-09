const { addCardsToSlider, animateCarousel } = require("./../Carousel");
const { tempData } = require("./../tempData");

function render() {
  // Realizamos la solicitud AJAX y llamamos a la función para agregar tarjetas al carrusel
  $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
    console.log(data);
    addCardsToSlider(tempData);
    animateCarousel();
  });
}

module.exports = { render };
