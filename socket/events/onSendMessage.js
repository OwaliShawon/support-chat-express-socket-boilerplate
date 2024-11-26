function onSendMessage(io, socket, data) {
    const { message, username, room } = data;
    io.in(room).emit('receive_message', {
        message,
        username,
        __createdtime__: Date.now(),
    });
}

module.exports = onSendMessage;
