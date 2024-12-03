const errorHandler = require('../../libraries/error-handling');
const userService = require('./service');

// Get all users
const getUsers = async (req, res, next) => {
    try {
        await userService.getUsers(req, res, next);
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        await userService.getUserById(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Create a user
const createUser = async (req, res, next) => {
    try {
        await userService.createUsers(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Update user
const updateUser = async (req, res, next) => {
    try {
        await userService.updateUser(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Delete user
const deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req, res, next);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
