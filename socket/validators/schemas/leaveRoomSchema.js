const Joi = require('joi');

const leaveRoomSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    room: Joi.string().min(1).required(),
});

module.exports = leaveRoomSchema;
