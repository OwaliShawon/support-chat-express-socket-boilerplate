const Joi = require('joi');

const getUsersDto = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    room: Joi.string().min(1).required(),
    user_type_id: Joi.number().integer().required(),
});

module.exports = getUsersDto;
