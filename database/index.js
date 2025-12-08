/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { mongoURI } = require("../config");
require("dotenv").config();

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB "))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

module.exports = mongoose;
