const { leaveRoomSchema } = require('../validators');
const validate = require('../validators/validate');

function onLeaveRoom(io, socket, data) {
    try {
        // Validate the data
        validate(leaveRoomSchema, data);

        const { username, room } = data;
        console.log(`${username} is leaving room: ${room}`);

        // Leave the room
        socket.leave(room);

        // Notify other users in the room
        socket.to(room).emit('receive_message', {
            username: 'System',
            message: `${username} has left the chat`,
            __createdtime__: Date.now(),
        });
    } catch (err) {
        console.error(`Validation error for leave_room: ${err.message}`);
        socket.emit('validation_error', { error: err.message });
    }
}

module.exports = onLeaveRoom;
