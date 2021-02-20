const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel: {
        type: String,
        required: true,
        minLength: [4, 'The hotel name should be at least 4 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9 ]+$/.test(v)
            },
            message: (props) => {
                return `Hotel name should contains only english letters and digits`
            }
        }
    },
    city: {
        type: String,
        required: 'City is required',
        minLength: [3, 'The city name should be at least 3 characters long']
    },
    'free-rooms': {
        type: Number,
        required: true,
        min: [1, 'The number of free rooms should be between 1 and 100'],
        max: [100, 'The number of free rooms should be between 1 and 100']
    },
    imgUrl: {
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
    bookedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Hotel', hotelSchema);