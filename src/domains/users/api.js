const apiResponse = require('../../libraries/utils/apiResponse');
const userService = require('./service');

// Get all users
const findAll = async (req, res, next) => {
    try {
        const users = await userService.findAll(req, res, next);

        return res.status(200).json(apiResponse(200, 'Fetching all users', users));
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const user = await userService.findById(req, res, next);

        return res.status(200).json(apiResponse(200, 'Fetching user', user));
    } catch (error) {
        next(error);
    }
};

// Create a user
const create = async (req, res, next) => {
    try {
        const user = await userService.create(req, res, next);

        return res.status(201).json(apiResponse(201, 'User created successfully', user));
    } catch (error) {
        next(error);
    }
};

// Update user
const update = async (req, res, next) => {
    try {
        const updateUser = await userService.update(req, res, next);

        return res.status(200).json(apiResponse(200, 'User updated successfully', updateUser));
    } catch (error) {
        next(error);
    }
};

// Delete user
const remove = async (req, res, next) => {
    try {
        const user = await userService.remove(req, res, next);

        return res.status(200).json(apiResponse(200, 'User deleted successfully', user));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};
