const mongoose = require('mongoose');
const Config = require('../../configs');

const connectWithMongoDb = async () => {
    const MONGODB_URI = Config.MONGODB_URI;
    console.log(MONGODB_URI);
    if (!MONGODB_URI) {
        console.log('MONGODB_URI is undefined. Check your configuration.');
        return;
    }

    try {
        mongoose.connection.once('open', () => {
            console.log('MongoDB connection is open');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Error connecting to MongoDB: ', err);
        });

        await mongoose.connect(MONGODB_URI);

        console.log('MongoDB connection established successfully');
    } catch (error) {
        console.log('MongoDB connection error: ', error);
    }
};

const disconnectWithMongoDb = async () => {
    try {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.log('Error disconnecting from MongoDB: ', error);
    }
};

module.exports = { connectWithMongoDb, disconnectWithMongoDb };
