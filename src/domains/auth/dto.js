const Joi = require('joi');
const { createUserDto } = require('../users/dto');

const registerDto = createUserDto.append({});

const loginDto = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = {
    registerDto,
    loginDto,
};
