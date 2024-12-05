const Joi = require('joi');
const { getUsersDto } = require('../users/dto');

const registerDto = getUsersDto.append({});

const loginDto = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = {
    registerDto,
    loginDto,
};
