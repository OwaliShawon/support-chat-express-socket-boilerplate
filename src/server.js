require('dotenv').config();
const app = require('./app'); // Adjusted path
const http = require('http');
const { Server } = require('socket.io');
const { connectSocket } = require('./socket');
const { connectWithMongoDb, disconnectWithMongoDb } = require('./libraries/db');
const logger = require('./libraries/log/logger');

const PORT = process.env.PORT || 3000;

let server;

async function startServer() {
    server = http.createServer(app);
    const io = new Server(server);
    logger.info('Connecting to MongoDB');
    await connectWithMongoDb();
    logger.info('Connecting to Socket.io');
    await connectSocket(io);
    server.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));
    return server;
}

async function stopServer() {
    if (server) {
        server.close();
    }
}

module.exports = { startServer, stopServer };
