const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, SECRET } = require('../config/config');

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Username should be at least 5 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9]+$/.test(v)
            },
            message: (props) => {
                return `Username should contains only english letters and digits`
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password should be at least 8 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9]+$/.test(v)
            },
            message: (props) => {
                return `Password should contains only english letters and digits`
            }
        }
    }
})

userSchema.pre('save', async function(next) {
    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
})

module.exports = mongoose.model('User', userSchema);