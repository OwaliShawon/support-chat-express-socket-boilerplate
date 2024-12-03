require('dotenv').config();
const app = require('./app'); // Adjusted path
const http = require('http');
const { Server } = require('socket.io');
const { connectSocket } = require('./socket');
const { connectWithMongoDb, disconnectWithMongoDb } = require('./libraries/db');
const logger = require('./libraries/log/logger');

const server = http.createServer(app);
const io = new Server(server);

logger.info('Connecting to MongoDB');
connectWithMongoDb();
logger.info('Connecting to Socket.io');
connectSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));

// Disconnect from MongoDB and exit the process
const gracefulShutdown = async signal => {
    console.log(`${signal} received: shutting down server`);
    server.close(async () => {
        console.log('HTTP server closed');
        await disconnectWithMongoDb();
        console.log('Exiting process');
        process.exit(0);
    });
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
