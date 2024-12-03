const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'username field is required*'],
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email field is required*'],
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'Password field is required*'],
            minLength: [6, 'Password must be at least 6 characters!'],
            set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
        },
        room: {
            type: String,
            required: [true, 'Room field is required*'],
        },
        user_type_id: {
            type: String,
            required: [true, 'User type field is required*'],
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);
module.exports = User;
