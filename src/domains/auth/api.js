const apiResponse = require('../../libraries/utils/apiResponse');
const userService = require('../users/service');
const authService = require('./service');

const model = 'Auth';

const register = async (req, res, next) => {
    try {
        await authService.register(req.body);
        return res.status(201).json(apiResponse(201, `Register successfully`, 'into registration'));
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        console.log('into login');
        return res.status(201).json(apiResponse(201, `Login successfully`, 'into login'));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
};
