const apiResponse = require('../../libraries/utils/apiResponse');
const userService = require('./service');

// Get all users
const findAll = async (req, res, next) => {
    try {
        const response = await userService.findAll();

        return res.status(200).json(apiResponse(200, 'Fetching all users', response));
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const response = await userService.findById(userId);

        return res.status(200).json(apiResponse(200, 'Fetching user', response));
    } catch (error) {
        next(error);
    }
};

// Create a user
const create = async (req, res, next) => {
    try {
        const response = await userService.create(req.body);

        return res.status(201).json(apiResponse(201, 'User created successfully', response));
    } catch (error) {
        next(error);
    }
};

// Update user
const update = async (req, res, next) => {
    try {
        const response = await userService.update({ ...req.body, userId: req.params.id });

        return res.status(200).json(apiResponse(200, 'User updated successfully', response));
    } catch (error) {
        next(error);
    }
};

// Delete user
const remove = async (req, res, next) => {
    try {
        await userService.remove(req.params.id);

        return res.status(200).json(apiResponse(200, 'User deleted successfully', null));
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
