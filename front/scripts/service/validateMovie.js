const areValidTypes = ({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) => {
  return (
    typeof title === "string" &&
    typeof year === "number" &&
    typeof director === "string" &&
    typeof duration === "string" &&
    Array.isArray(genre) &&
    typeof rate === "number" &&
    typeof poster === "string"
  );
};

const deepValid = ({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) => {
  return (
    String(title).length > 3 &&
    String(year).length === 4 &&
    year > 0 &&
    year < 2025 &&
    String(director).length > 3 &&
    String(duration).match(/(\d+)h/) &&
    rate >= 1.0 &&
    rate <= 10.0 &&
    String(poster).match(/^https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp)$/i)
  );
};
module.exports = { areValidTypes, deepValid };
