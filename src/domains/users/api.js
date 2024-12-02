const service = require('./service');

// Get all users
const getUsers = async (req, res, next) => {
    try {
        await service.getUsers(req, res, next);
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        await service.getUserById(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Create a user
const createUser = async (req, res, next) => {
    try {
        await service.createUsers(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Update user
const updateUser = async (req, res, next) => {
    try {
        await service.updateUser(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Delete user
const deleteUser = async (req, res, next) => {
    try {
        await service.deleteUser(req, res, next);
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
