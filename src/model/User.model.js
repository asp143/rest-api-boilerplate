/* eslint-disable func-names */
const mongoose = require('mongoose');
const { encrypt } = require('../utils/bcrypt');

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

module.exports = {
    Create: newData => user.create(newData),
    FindOneById: id => user.findById(id),
    Update: (id, newData) => user.findByIdAndUpdate(id, newData),
    FindAll: params => user.find(params),
    FindOne: query => user.findOne(query),
};
