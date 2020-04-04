/* eslint-disable func-names */
const mongoose = require('mongoose');
const { encrypt } = require('../../utils/bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

// eslint-disable-next-line prefer-arrow-callback
UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = encrypt(this.password);
    return next();
});

const user = mongoose.model('User', UserSchema);

module.exports = user;
