function addCardsToSlider() {
  const slider = document.getElementsByClassName("carrusel")[0];
  tempData.forEach((movie) => {
    slider.appendChild(createCard(movie));
  });
}

function createCard(movie) {
  const img = document.createElement("img");
  img.src = movie.poster;
  img.classList = "movieCard";
  return img;
}

addCardsToSlider();
