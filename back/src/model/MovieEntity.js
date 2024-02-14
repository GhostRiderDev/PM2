const { areValidTypes } = require("../services/ValidateMovie");

class MovieEntity {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!areValidTypes(title, year, director, duration, genre, rate, poster)) {
      throw new Error("Invalid types");
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}
