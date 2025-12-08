/* eslint-disable no-undef */
const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: envFile });

module.exports = {
  mongoURI: process.env.MONGO_URI,
};
