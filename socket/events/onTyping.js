const { typingSchema } = require('../validators');
const validate = require('../validators/validate');

function onTyping(io, socket, data) {
    try {
        // Validate the data
        validate(typingSchema, data);

        const { username, room } = data;
        console.log(`${username} is typing in room: ${room}`);

        // Notify other users in the room
        socket.to(room).emit('typing', { username });
    } catch (err) {
        console.error(`Validation error for is_typing: ${err.message}`);
        socket.emit('validation_error', { error: err.message });
    }
}

module.exports = onTyping;
