// Get all users
const getUsers = async (req, res, next) => {
    try {
        res.status(200).json({ message: 'Fetching all users' });
    } catch (error) {
        next(error);
    }
};

// Group functions in a single object
const service = {
    getUsers,
};

// Export the service object
module.exports = service;
