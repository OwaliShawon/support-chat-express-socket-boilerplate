const { joinRoomSchema } = require('../validators');
const validate = require('../validators/validate');

function onJoinRoom(io, socket, data) {
    try {
        // Validate data
        validate(joinRoomSchema, data);

        const { username, room } = data;
        socket.join(room);
        console.log(`${username} joined room: ${room}`);

        // Notify room that user has joined
        socket.to(room).emit('receive_message', {
            username: 'System',
            message: `${username} has joined the chat`,
            __createdtime__: Date.now(),
        });
    } catch (err) {
        console.error(`Validation error for join_room: ${err.message}`);
        socket.emit('validation_error', { error: err.message });
    }
}

module.exports = onJoinRoom;
