const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Username is required*'],
        },
        password: {
            type: String,
            minlength: 6,
            required: [true, 'Password is required*'],
            set: v => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
        },
        userType: {
            type: String,
            enum: ['SUPER_ADMIN', 'SUPPORT_AGENT'],
            default: 'SUPER_ADMIN',
        },
        profileId: {
            type: String,
            ref: 'Profile',
            required: [false, 'Profile is required*'],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        chats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                unique: true,
                ref: 'Chat',
            },
        ],
        lastActivity: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true },
);

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
