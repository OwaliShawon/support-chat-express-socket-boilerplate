const { sendMessageSchema } = require('../validators');
const validate = require('../validators/validate');

function onSendMessage(io, socket, data) {
    try {
        // Validate data
        validate(sendMessageSchema, data);

        const { message, username, room } = data;
        io.in(room).emit('receive_message', {
            message,
            username,
            __createdtime__: Date.now(),
        });
    } catch (err) {
        console.error(`Validation error for send_message: ${err.message}`);
        socket.emit('validation_error', { error: err.message });
    }
}

module.exports = onSendMessage;
