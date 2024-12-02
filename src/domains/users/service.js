const User = require('./schema');

// Get all users
const getUsers = async (req, res, next) => {
    try {
        const userData = await User.find();

        return res.status(200).json({
            success: true,
            message: 'Fetching all users',
            length: userData.length,
            users: userData,
        });
    } catch (error) {
        next(error);
    }
};

// Get user
const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            success: true,
            message: 'Fetching user by id',
            users: userData,
        });
    } catch (error) {
        next(error);
    }
};

const createUsers = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Create user.
        const newUser = await User.create({ name, email, password });

        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userId = req.params.id;

        // user id not found
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User id not found' });
        }

        // update user.
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, password },
            { new: true },
        );

        return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;

        // user not found
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // update user.
        await User.findByIdAndDelete(userId);

        return res.status(200).json({ message: 'User deleted successfully', user: null });
    } catch (error) {
        next(error);
    }
};

// Group functions in a single object
const userService = {
    getUsers,
    getUserById,
    createUsers,
    updateUser,
    deleteUser,
};

// Export the service object
module.exports = userService;
