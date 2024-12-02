require('dotenv').config();
const app = require('./app'); // Adjusted path
const http = require('http');
const { Server } = require('socket.io');
const { connectSocket } = require('./socket');
const { connectWithMongoDb } = require('./libraries/db');
const logger = require('./libraries/log/logger');

const server = http.createServer(app);
const io = new Server(server);

logger.info('Connecting to MongoDB');
connectWithMongoDb();
logger.info('Connecting to Socket.io');
connectSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));
