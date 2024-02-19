const app = require("./src/server");
const connectToDB = require("./src/config/dbConfig");
const PORT = 8888;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.error("server not could connect to DB");
  });
