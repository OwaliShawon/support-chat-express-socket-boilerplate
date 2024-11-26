const Joi = require('joi');

const sendMessageSchema = Joi.object({
    message: Joi.string().min(1).required(),
    username: Joi.string().min(3).max(30).required(),
    room: Joi.string().min(1).required(),
    user_type_id: Joi.number().required(),
    __createdtime__: Joi.number().integer().required(),
});

module.exports = sendMessageSchema;
