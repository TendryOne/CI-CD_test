const mongoose = require("mongoose");
const { mongoURI } = require("../../config");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB for tests");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
    throw err;
  }
};

const clearCollections = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

const closeDatabaseConnection = async () => {
  await mongoose.connection.close();
};

module.exports = {
  connectToDatabase,
  clearCollections,
  closeDatabaseConnection,
};
