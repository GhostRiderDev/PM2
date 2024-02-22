const createSingleMovie = (input) => {
  const movieArticle = document.createElement("article");
  const dataText = document.createElement("div");
  const title = document.createElement("h4");
  title.classList.add("h-25");
  const time = document.createElement("p");
  time.classList = "mt-5";
  const director = document.createElement("p");
  const genres = document.createElement("p");
  const stars = document.createElement("p");
  const poster = document.createElement("img");
  poster.height = "350";
  movieArticle.classList = "d-flex movie-full";

  // Append data
  title.innerText = `${input.title}`;
  time.innerText = `${input.duration} 🕒 ${input.year}`;
  director.innerText = `By ${input.director}`;
  genres.innerText = Array(input.genre).reduce(
    (acc, el) => acc.concat(` ${el}`),
    ""
  );
  let rateStars = "";
  for (let i = 1.0; i < input.rate; i += 2) {
    rateStars += "⭐";
  }
  stars.innerText = rateStars;
  poster.src = input.poster;
  //Integrate All
  dataText.appendChild(title);
  dataText.appendChild(time);
  dataText.appendChild(director);
  dataText.appendChild(genres);
  dataText.appendChild(stars);
  movieArticle.appendChild(dataText);
  movieArticle.appendChild(poster);
  return movieArticle;
};

const renderSingleMovie = (input) => {
  const areaToInsert = document.getElementById("info-movie");
  areaToInsert.appendChild(createSingleMovie(input));
};

module.exports = { renderSingleMovie };
