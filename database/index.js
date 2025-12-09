const mongoose = require("mongoose");
const { mongoURI } = require("../config");

const startConnection = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
    throw err;
  }
};

module.exports = {
  startConnection,
};
