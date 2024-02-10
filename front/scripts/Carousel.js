const { createCard } = require("./Card");

function addCardsToSlider(data) {
  const sliderIds = ["carousel-best", "carousel-main"];
  sliderIds.map((id) => {
    console.log(id);
    const slider = document.querySelector(`#${id}`);
    let isFirstCard = true; // Flag para marcar la primera tarjeta como activa
    data.forEach((movie) => {
      const card = createCard(movie);
      // Agregamos la clase 'active' solo al primer elemento
      if (isFirstCard) {
        card.classList.add("active");
        isFirstCard = false;
      }
      slider.appendChild(card);
    });
  });
}

function animateCarousel(selectorCSS) {
  return $(selectorCSS).each(function () {
    var minPerSlide = 1;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next.children(":first-child").clone().appendTo($(this));
    }
  });
}

module.exports = {
  addCardsToSlider,
  animateCarousel,
};
