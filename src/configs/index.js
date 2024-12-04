const dotenv = require('dotenv');
dotenv.config();

const Config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
};

module.exports = Config;
