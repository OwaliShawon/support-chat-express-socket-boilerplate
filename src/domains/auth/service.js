const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userRepository = require('../users/repository');
const userService = require('../users/service');
const { AppError } = require('../../libraries/error-handling/AppError');

module.exports = authService = {
    register: async data => {
        try {
            await userService.create(data);
        } catch (error) {
            throw error;
        }
    },

    login: async data => {
        try {
            const user = await userRepository.findOneByUsername(data.username);
            if (!user) throw new AppError(404, 'User not found');

            const validPassword = await bcrypt.compare(data.password, user.password);
            if (!validPassword) throw new AppError(404, 'Invalid password');

            const token = jwt.sign(
                {
                    _id: user._id,
                    username: user.username,
                    userType: user.userType,
                    isOnline: user.isOnline,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d',
                },
            );
            return token;
        } catch (error) {
            throw error;
        }
    },
};
