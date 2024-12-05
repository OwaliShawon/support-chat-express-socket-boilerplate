const { AppError } = require('../../libraries/error-handling/AppError');
const logger = require('../../libraries/log/logger');
const userRepository = require('./repository');

// Get all users
const findAll = async (req, res, next) => {
    try {
        return await userRepository.findAll();
    } catch (error) {
        throw error;
    }
};

// Get user
const findById = async userId => {
    try {
        const response = await userRepository.findById(userId);
        if (!response) {
            throw new AppError(404, 'User not found');
        }
        return response;
    } catch (error) {
        throw error;
    }
};

// Create a user
const create = async data => {
    try {
        const { username, password } = data;

        const exists = await userRepository.exists(username);

        if (exists) {
            throw new AppError('UserNotFound', 'User already exists', 404);
        }

        return await userRepository.create({
            username,
            password,
        });
    } catch (error) {
        throw error;
    }
};

// Update user
const update = async data => {
    const user = await userRepository.findById(data?.userId);
    if (!user) {
        throw new AppError(404, 'User not found');
    }

    return await userRepository.update(data?.userId, data);
};

// Delete user
const remove = async userId => {
    console.log('userId userId******', userId);
    try {
        const response = await userRepository.findById(userId);

        if (!response) {
            throw new AppError('UserNotFound', 'User already exists', 404);
        }

        return await userRepository.remove(userId);
    } catch (error) {
        throw error;
    }
};

const userService = {
    findAll,
    findById,
    create,
    update,
    remove,
};

module.exports = userService;
