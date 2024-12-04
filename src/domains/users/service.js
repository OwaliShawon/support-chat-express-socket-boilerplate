const { AppError } = require('../../libraries/error-handling/AppError');
const logger = require('../../libraries/log/logger');
const userRepository = require('./repository');
const User = require('./schema');

// Get all users
const findAll = async (req, res, next) => {
    try {
        return await userRepository.findAll();
    } catch (error) {
        throw error;
    }
};

// Get user
const findById = async (userId) => {
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

const create = async (data) => {
    try {
        logger.info('data*********', data);
        const { userTypeId, profileId, isOnline, username, chat, lastActivity } = data;

        // Create user.
        return await userRepository.create({
            userTypeId,
            profileId,
            isOnline,
            username,
            chat,
            lastActivity,
        });
    } catch (error) {
        throw error;
    }
};

const update = async (data) => {
    try {
        const { userTypeId, profileId, isOnline, username, chat, lastActivity } = data;

        const response = await userRepository.findById(data.userId);
        if (!response) {
            throw new AppError(404, 'User not found');
        }

        // Update user.
        return await userRepository.update(data.userId, {
            userTypeId,
            profileId,
            isOnline,
            username,
            chat,
            lastActivity,
        });
    } catch (error) {
        throw error;
    }
};

const remove = async (userId) => {
    console.log('userId userId******', userId);
    try {
        const response = await userRepository.findById(userId);

        if (!response) {
            throw new AppError(404, 'User not found');
        }

        // Delete user.
        return await userRepository.remove(userId);
    } catch (error) {
        throw error;
    }
};

// Group functions in a single object
const userService = {
    findAll,
    findById,

    create,
    update,
    remove,
};

// Export the service object
module.exports = userService;
