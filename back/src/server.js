const express = require("express");
const movieRouter = require("./routes/MovieRouter");

const app = express();

app.use("/movies", movieRouter);

module.exports = app;
