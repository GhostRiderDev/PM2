const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const movieRouter = require("./routes/MovieRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/movies", movieRouter);

module.exports = app;
