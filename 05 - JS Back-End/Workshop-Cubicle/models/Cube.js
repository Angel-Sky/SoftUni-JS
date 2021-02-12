const mongoose = require('mongoose');
const accessorySchema = require('./Accessory')
const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//
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
    ]
})


module.exports = mongoose.model('Cube', cubeSchema);