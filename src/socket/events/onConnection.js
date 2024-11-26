const onJoinRoom = require('./onJoinRoom');
const onSendMessage = require('./onSendMessage');
const onTyping = require('./onTyping');
const onLeaveRoom = require('./onLeaveRoom');
const onDisconnect = require('./onDisconnect');

function onConnection(io, socket) {
    socket.on('join_room', (data) => onJoinRoom(io, socket, data));
    socket.on('send_message', (data) => onSendMessage(io, socket, data));
    socket.on('is_typing', (data) => onTyping(io, socket, data));
    socket.on('leave_room', (data) => onLeaveRoom(io, socket, data));
    socket.on('disconnect', () => onDisconnect(socket));
}

module.exports = onConnection;
