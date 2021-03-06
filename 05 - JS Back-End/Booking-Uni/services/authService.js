const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

async function registerUser(email, username, password) {
    let checkUser = await User.findOne({ username });
    if (checkUser) throw { message: 'These username isn\'t available. Please choose a new one' };

    let checkEmail = await User.findOne({ email });
    if (checkEmail) throw { message: 'These email isn\'t available. Please choose a new one' };

    let user = new User({ email, username, password });

    return await user.save();
}

async function loginUser({ username, password }) {
    let user = await User.findOne({ username });
    if (!user) throw { message: 'There is no such user' };

    let hasValidPass = await bcrypt.compare(password, user.password);
    if (!hasValidPass) throw { message: "Invalid Username or Password" }

    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET);
    return token;
}

module.exports = {
    registerUser,
    loginUser
}