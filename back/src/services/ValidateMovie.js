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
    typeof title === "string" &&
    typeof year === "number" &&
    typeof director === "string" &&
    typeof duration === "string" &&
    Array.isArray(genre) &&
    typeof rate === "number" &&
    typeof poster === "string"
  ) {
    return true;
  }
  return false;
};

module.exports = { areValidTypes };
