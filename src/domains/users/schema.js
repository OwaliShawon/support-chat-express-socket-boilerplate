const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Username is required*'],
        },
        userTypeId: {
            type: String,
            required: [true, 'User type ID is required*'],
        },
        profileId: {
            type: String,
            required: [true, 'Profile ID is required*'],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        chat: {
            type: String,
            required: [true, 'Chats field is required*'],
        },
        lastActivity: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);
module.exports = User;
