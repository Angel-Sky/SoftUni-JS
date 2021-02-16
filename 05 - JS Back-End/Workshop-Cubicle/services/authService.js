const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, SECRET } = require('../config/config');
const jwt = require('jsonwebtoken');

async function register(data) {
   //TO DO: Check if we already have a user with that username in DB

    const user = new User({ username: data.username, password: data.password });
    return await user.save();
}


async function login(data) {
    const {username, password} = data;

    let user = await User.findOne({username});
    if (!user) throw {message: 'There is no such user'};

    let hasValidPass = await bcrypt.compare(password, user.password);
    if (!hasValidPass) throw {message: "Invalid Username or Password"}
   
    let token = jwt.sign({_id: user._id, username: user.username}, SECRET);
    return token;
}

module.exports = {
    register,
    login
}