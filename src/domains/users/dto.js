const Joi = require('joi');

const getUsersDto = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ai'] } })
        .required(),
    password: Joi.string().min(6).required(),
    room: Joi.string().min(1).required(),
    user_type_id: Joi.string().required(),
});

module.exports = getUsersDto;
