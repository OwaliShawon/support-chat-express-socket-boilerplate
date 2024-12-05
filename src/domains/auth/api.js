const apiResponse = require('../../libraries/utils/apiResponse');
const userService = require('../users/service');
const authService = require('./service');

const model = 'Auth';

const register = async (req, res, next) => {
    try {
        console.log('object registration');
        //TODO: call create user
        await userService.create({ ...req.body });
        await authService.findAll();
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
