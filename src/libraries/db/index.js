const mongoose = require("mongoose");
const logger = require("../log/logger");
const Config = require("../../configs");

const connectWithMongoDb = async () => {
  const MONGODB_URI = Config.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error("MONGODB_URI is undefined. Check your configuration.");
    return;
  }

  try {
    mongoose.connection.once("open", () => {
      logger.info("MongoDB connection is open");
    });

    mongoose.connection.on("error", (err) => {
      logger.error("Error connecting to MongoDB: ", err);
    });

    await mongoose.connect(MONGODB_URI);

    logger.info("MongoDB connection established successfully");
  } catch (error) {
    logger.error("MongoDB connection error: ", error);
  }
};

const disconnectWithMongoDb = async () => {
  try {
    await mongoose.disconnect();
    logger.info("Disconnected from MongoDB");
  } catch (error) {
    logger.error("Error disconnecting from MongoDB: ", error);
  }
};

module.exports = { connectWithMongoDb, disconnectWithMongoDb };
