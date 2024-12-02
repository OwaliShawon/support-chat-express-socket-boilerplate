const userRepository = require('./repository');
const apiResponse = require('../../libraries/utils/apiResponse');
const User = require('./schema');

// Get all users
const findAll = async (req, res, next) => {
    try {
        return await userRepository.findAll();
    } catch (error) {
        next(error);
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
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // user already exists
        const existingUser = await userRepository.findByOne(email);
        if (existingUser) {
            throw new Error(`User already exists!`);
        }

        // Create user.
        return await userRepository.create({ name, email, password });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userId = req.params.id;

        const user = await userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found!');
        }

        // Update user.
        return await userRepository.update(userId, { name, email, password });
    } catch (error) {
        next(error);
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
        next(error);
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
