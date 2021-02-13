const mongoose = require('mongoose');
const {constants} = require('../config/constants');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: constants.TITLE_MIN_LENGTH,
    },
    description: {
        type: String,
        required: true,
        minlength: constants.DESCRIPTION_MIN_LENGTH,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: constants.IMAGE_URL_REGEX,
    },
    duration: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        // default: Date.now().toLocaleString(),
    },
    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

courseSchema.pre('validate', function (next) {
    let course = this;

    if (!course.createdAt) {
        const date = new Date();
        course.createdAt = date.toDateString();
    }
    next();
});

module.exports = mongoose.model('Course', courseSchema);