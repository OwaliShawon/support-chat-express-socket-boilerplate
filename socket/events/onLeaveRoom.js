function onLeaveRoom(io, socket, data) {
    const { username, room } = data;
    socket.leave(room);
    console.log(`${username} left room: ${room}`);

    // Notify room that user has left
    socket.to(room).emit('receive_message', {
        username: 'System',
        message: `${username} has left the chat`,
        __createdtime__: Date.now(),
    });
}

module.exports = onLeaveRoom;
