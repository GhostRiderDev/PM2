const app = require("./src/server");

const PORT = 8888;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})