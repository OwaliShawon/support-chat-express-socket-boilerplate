const Joi = require('joi');

const getUsersDto = Joi.object({
    username: Joi.string().required(),
    userTypeId: Joi.string().required(),
    profileId: Joi.string().required(),
    isOnline: Joi.boolean().optional(),
    chat: Joi.string().required(),
    lastActivity: Joi.date().greater('now'),
});

const userIdDto = Joi.object({
    id: Joi.string().required(),
});

module.exports = {
    getUsersDto,
    userIdDto,
};
