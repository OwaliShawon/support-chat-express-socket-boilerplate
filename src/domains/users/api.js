const service = require('./service');

// Get all users
const getUsers = async (req, res, next) => {
    try {
        await service.getUsers(req, res, next);
    } catch (error) {
        next(error);
    }
};

// Create a user
const createUser = async (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', data: { name, email } });
};

module.exports = {
    getUsers,
    createUser,
};
