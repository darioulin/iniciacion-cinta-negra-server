const mongoose = require('mongoose');

const userSchema = require('../schemas/userSchema');

const UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel,
};