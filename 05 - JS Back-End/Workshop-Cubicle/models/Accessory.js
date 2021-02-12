const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    }    
});

module.exports = mongoose.model('Accessory', accessorySchema);