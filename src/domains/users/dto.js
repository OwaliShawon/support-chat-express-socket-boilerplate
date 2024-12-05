const Joi = require('joi');

const baseUserDto = Joi.object({
    userType: Joi.string().valid('SUPER_ADMIN', 'SUPPORT_AGENT').optional(),
    profileId: Joi.string().optional(),
    isOnline: Joi.boolean().optional(),

    chats: Joi.array()
        .items(
            Joi.object({
                message: Joi.string().optional(),
            }),
        )
        .optional(),
    lastActivity: Joi.date().greater('now'),
});

const createUserDto = baseUserDto.append({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

const updateUserDto = baseUserDto.append({
    username: Joi.string().optional(),
    password: Joi.string().min(6).optional(),
});

const userIdDto = Joi.object({
    id: Joi.string().required(),
});

module.exports = {
    createUserDto,
    updateUserDto,
    userIdDto,
};
