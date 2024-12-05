const userService = require('../users/service');

const authService = {
    register: async data => {
        try {
            await userService.create(data);
        } catch (error) {
            throw error;
        }
    },
    login: async (req, res, next) => {
        try {
            return;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = authService;
