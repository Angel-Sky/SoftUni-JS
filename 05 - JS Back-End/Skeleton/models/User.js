const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/config')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: ['Username is required'],
        unique: true,
        minlength: [4, 'Username should be at least 4 characters long'],
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
        required: ['Password is required'],
        minlength: [4, 'Password should be at least 4 characters long']
    },
    amount: {
        type: Number,
        default: 0
    },
    expenses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Expense'
        }
    ],
});

userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt(SALT);
    let hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
})

// userSchema.pre('save', function (done) {
//     const user = this;

//     if (!user.isModified('password')) {
//         done();
//         return;
//     }

//     bcrypt.genSalt(SALT, (err, salt) => {
//         if (err) {
//             done(err);
//             return;
//         }

//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) {
//                 done(err);
//                 return;
//             }

//             user.password = hash;
//             done();
//         });
//     });
// });

module.exports = mongoose.model('User', userSchema);