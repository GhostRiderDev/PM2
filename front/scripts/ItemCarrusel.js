function createItem(movie) {
  const item = document.createElement("div");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("div");
  img.src = movie.poster;
  item.classList.add("item");
  card.classList.add("card");
  img.classList.add("card-img-top");
  cardBody.classList.add("card-body", "text-center");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = movie.title;
  item.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  return item;
}
module.exports = { createItem };
