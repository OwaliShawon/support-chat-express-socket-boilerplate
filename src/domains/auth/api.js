const apiResponse = require('../../libraries/utils/apiResponse');
const userService = require('../users/service');
const authService = require('./service');

const model = 'Auth';

const register = async (req, res, next) => {
    try {
        const response = await authService.register(req.body);
        return res.status(201).json(apiResponse(201, `Register successfully`, response));
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const response = await authService.login(req.body);
        await res.header('Authorization', `Bearer ${response.token}`);
        return res.status(201).json(apiResponse(201, `Login successfully`, { token: response }));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
};
