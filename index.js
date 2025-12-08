const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes/index.routes");
require("./database/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = { app, server };
