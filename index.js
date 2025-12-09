const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes/index.routes");
const { startConnection } = require("./database/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "test") {
  startConnection();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = { app };
