const areValidTypes = (
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster
) => {
  if (
    typeof title !== "string" ||
    typeof year !== "number" ||
    typeof director !== "string" ||
    typeof duration !== "number" ||
    typeof genre !== "string" ||
    typeof rate !== "number" ||
    typeof poster !== "string"
  ) {
    return false;
  }
  return true;
};

module.exports = { areValidTypes };
