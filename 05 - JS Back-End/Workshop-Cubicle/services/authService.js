const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, SECRET } = require('../config/config');
const jwt = require('jsonwebtoken');

async function register(data) {
    if (data.password.trim() == "" || data.repeatPassword.trim() == "" || data.username.trim() == "") {
        throw { message: 'All fields are required' };
    }

    if (data.password !== data.repeatPassword) {
        throw { message: 'Passwords don\'t match' };
    }

    //TO DO: Check if we already have a user with that username in DB

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(data.password, salt);
    const user = new User({ username: data.username.toLowerCase(), password: hash });

    return await user.save();
}


async function login(data) {
    const {username, password} = data;
    username = username.toLowerCase();
    
    let user = await User.findOne({username});
    if (!user) throw {message: 'There is no such user'};

    let hasValidPass = await bcrypt.compare(password, user.password);
    if (!hasValidPass) throw {message: "Invalid Username or Password"}
    //generate token
    let token = jwt.sign({_id: user._id}, SECRET);
    return token;
}

module.exports = {
    register,
    login
}