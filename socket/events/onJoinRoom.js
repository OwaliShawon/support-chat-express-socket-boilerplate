function onJoinRoom(io, socket, data) {
    const { username, room } = data;
    socket.join(room);
    console.log(`${username} joined room: ${room}`);

    // Notify room that user has joined
    socket.to(room).emit('receive_message', {
        username: 'System',
        message: `${username} has joined the chat`,
        __createdtime__: Date.now(),
    });
}

module.exports = onJoinRoom;
