const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Title should be at least 4 characters long']
    },
    description: {
        type: String,
        required: ['Description is required'],
        minlength: [20, 'Description should be at least 20 characters long'],
        maxlength: [50, 'Description should be max 50 characters long']
    },
    imageUrl: {
        type: String,
        required: ['Image is required'],
        validate: {
            validator: (v) => {
                return /^https?:\/\//.test(v)
            },
            message: (props) => {
                return `The Image URL should start with http:// or https://`
            }
        }
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
    },
    enrolledUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('Course', courseSchema);