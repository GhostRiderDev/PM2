const actionOnExitMovie = () => {
  const btnExit = document.getElementById("btnExit");
  btnExit?.addEventListener("click", () => {
    document.getElementById("info-movie").style.display = "none";
    removeFirstElementWithClass("movie-full");
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.setProperty("display", "block");
    });
    document.documentElement.style.setProperty("--display-poster", "block");
  });
};

const removeFirstElementWithClass = (className) => {
  const elementToRemove = document.querySelector(`.${className}`);
  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
  }
};

module.exports = { actionOnExitMovie };
