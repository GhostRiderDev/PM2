function addCardsToSlider(data) {
  const slider = document.getElementsByClassName("carrusel")[0];
  data.forEach((movie) => {
    slider.appendChild(createCard(movie));
  });
}

function createCard(movie) {
  const img = document.createElement("img");
  img.src = movie.poster;
  img.classList = "movieCard";
  return img;
}

function addCardsToSlider(data) {
  const slider = document.getElementsByClassName("carrusel")[0];
  data.forEach((movie) => {
    slider.appendChild(createCard(movie));
  });

  // Una vez que se han agregado las tarjetas, configuramos el carrusel y comenzamos la animación
  //setupCarousel();
  const cards = document.querySelectorAll(".movieCard");
  console.log(cards);
}

// function setupCarousel() {
//   const imageWrapper = document.querySelector(".carrusel");
//   const imageItems = document.querySelectorAll(".carrusel > *");
//   const imageLength = imageItems.length;
//   const perView = 5;
//   let totalScroll = 0;
//   const delay = 2000;

//   imageWrapper.style.setProperty("--per-view", perView);

//   Array.from(imageItems).forEach((item) => {
//     imageWrapper.insertAdjacentHTML("beforeend", item.outerHTML);
//   });

//   let autoScroll = setInterval(scrolling, delay);

//   function scrolling() {
//     totalScroll++;
//     if (totalScroll == imageLength + 1) {
//       clearInterval(autoScroll);
//       totalScroll = 1;
//       imageWrapper.style.transition = "0s";
//       imageWrapper.style.left = "0";
//       autoScroll = setInterval(scrolling, delay);
//     }
//     const widthEl =
//       document.querySelector(".carrusel > :first-child").offsetWidth + 24;
//     imageWrapper.style.left = `-${totalScroll * widthEl}px`;
//     imageWrapper.style.transition = ".3s";
//   }
// }

// Realizamos la solicitud AJAX y llamamos a la función para agregar tarjetas al carrusel
$.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
  addCardsToSlider(data);
});

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
      if (navLink.getAttribute("href").includes(currentSection)) {
        navLink.classList.add("active");
      }
    });
  });
});
