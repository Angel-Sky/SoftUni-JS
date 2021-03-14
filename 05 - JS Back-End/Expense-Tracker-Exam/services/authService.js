const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config');

async function registerUser(username, password, amount) {
    let checkUser = await User.findOne({ username });
    if (checkUser) throw { message: 'These username isn\'t available. Please choose a new one' };

    let user = new User({ username, password, amount });
    return await user.save();
}

async function loginUser({ username, password }) {
    let user = await User.findOne({ username });
    if (!user) throw { message: 'Invalid username or password' };

    let hasValidPass = await bcrypt.compare(password, user.password);
    if (!hasValidPass) throw { message: "Invalid username or password" }

    let token = jwt.sign({ _id: user._id, username: user.username, amount: user.amount }, SECRET);
    return token;
}

module.exports = {
    registerUser,
    loginUser
}