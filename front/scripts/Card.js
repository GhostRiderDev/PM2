function createCard(movie) {
  const poster = document.createElement("div");
  const col = document.createElement("div");
  const card = document.createElement("div");
  card.classList = "card-carousel";
  const img = document.createElement("img");
  img.src = movie.poster;
  poster.classList = "carousel-item";
  img.classList = "img-card";
  poster.appendChild(col);
  col.appendChild(card);
  card.appendChild(img);
  return poster;
}

module.exports = { createCard };
