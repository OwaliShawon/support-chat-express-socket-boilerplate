const { AppError } = require('../../libraries/error-handling/AppError');
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
const findById = async (req, res, next) => {
    try {
        const userId = req.params.id;

        if (!userId) {
            throw new Error('User id not found!');
        }

        return await userRepository.findById(userId);
    } catch (error) {
        throw error;
    }
};

const create = async (req, res, next) => {
    try {
        const { username, email, password, room, user_type_id } = req.body;

        // User already exists
        const userExists = await userRepository.exists(email);

        if (userExists) {
            throw new AppError('UserExistsError', `User with email ${email} already exists!`, 409);
        }

        // Create user.
        return await userRepository.create({ username, email, password, room, user_type_id });
    } catch (error) {
        throw error;
    }
};

const update = async (req, res, next) => {
    try {
        const { username, email, password, room, user_type_id } = req.body;
        const userId = req.params.id;

        const user = await userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found!');
        }

        // Update user.
        return await userRepository.update(userId, {
            username,
            email,
            password,
            room,
            user_type_id,
        });
    } catch (error) {
        throw error;
    }
};

const remove = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error('User not found!');
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
