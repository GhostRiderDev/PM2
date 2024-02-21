const { render, addMovie } = require("./service/movie");

const formAddMovie = document.getElementById("formAddMovie");
formAddMovie.addEventListener("submit", async (event) => {
  event.preventDefault();
  const movieHTML = {
    tittle: event.target.title.value,
    director: event.target.director.value,
    year: Number.parseInt(event.target.year.value),
    duration: event.target.duration.value,
    genre: $(".selectpicker").selectpicker("val"),
    rate: Number.parseFloat(event.target.rate.value),
    poster: event.target.posterLink.value,
  };
  const movieBBDD = await addMovie(movieHTML);
  console.log(movieBBDD);
});

render();
