function onDisconnect(socket) {
    console.log(`User disconnected: ${socket.id}`);
}

module.exports = onDisconnect;
