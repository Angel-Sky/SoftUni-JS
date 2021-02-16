const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'The cube name should be at least 5 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9 ]+$/.test(v)
            },
            message: (props) => {
                return `Cube name should contains only english letters and digits`
            }
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'The description should be at least 20 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9 ]+$/.test(v)
            },
            message: (props) => {
                return `Description can hold only english letters and digits`
            }
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return /^https?:\/\//.test(v)
            },
            message: (props) => {
                return `The Image URL should start with http:// or https://`
            }
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 0,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Accessory'
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Cube', cubeSchema);