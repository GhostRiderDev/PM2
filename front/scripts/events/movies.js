const { areValidTypes, deepValid } = require("../service/validateMovie");
const { createItem } = require("./../ItemCarrusel");
const { addMovie } = require("./../service/movie");

function onAddMovie() {
  const formAddMovie = document.getElementById("formAddMovie");

  formAddMovie?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const movieHTML = {
      title: event.target.title.value,
      director: event.target.director.value,
      year: Number.parseInt(event.target.year.value),
      duration: event.target.duration.value,
      genre: $(".selectpicker").selectpicker("val"),
      rate: Number.parseFloat(event.target.rate.value),
      poster: event.target.posterLink.value,
    };
    if (!areValidTypes(movieHTML) || !deepValid(movieHTML)) {
      alert("Invalid data");
    } else {
      const movieBBDD = await addMovie(movieHTML);
      if (movieBBDD) {
        const carouselItem = createItem(movieBBDD);

        $("#best-movies")
          .trigger("add.owl.carousel", [carouselItem])
          .trigger("refresh.owl.carousel");

        window.location.href = "index.html";
      }
    }
  });
}

module.exports = { onAddMovie };
