const app = require("./src/server");
const connectToDB = require("./src/config/dbConfig");
const PORT = 8888;

connectToDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(
        `Server running on http://127.0.0.1:${server.address().port}`
      );
    });
  })
  .catch(() => {
    console.error("Server could not connect to DB");
  });
