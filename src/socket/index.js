const onConnection = require('./events/onConnection');

async function connectSocket(io) {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);
        onConnection(io, socket);
    });
}

module.exports = { connectSocket };
