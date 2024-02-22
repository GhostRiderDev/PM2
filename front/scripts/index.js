const { render } = require("./renderSliders");
const { onAddMovie } = require("./events/movies");
const { actionOnExitMovie } = require("./events/btnExit");

document.addEventListener("DOMContentLoaded", () => {
  render();
  onAddMovie();
  actionOnExitMovie();
});
