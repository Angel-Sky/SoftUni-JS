const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/config');

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: 'Username is required',
        unique: true,
    },
    password: {
        type: String,
        required: 'Password is required',
        minlength: [5, 'Password should be at least 5 charackters long'],
        // validate: {
        //     validator: (v) => {
        //         return /^[A-Za-z0-9]+$/.test(v)
        //     },
        //     message: (props) => {
        //         return `Password should contains only english letters and digits`
        //     }
        // }
    },
    bookedHotels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        }
    ],
    offeredHotels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        }
    ],
});

userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt(SALT);
    let hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
});



module.exports = mongoose.model('User', userSchema);