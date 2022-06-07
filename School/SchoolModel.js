const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        locationString: {
            type: String,
            required: true
        }
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    schoolType: {
        type: String, 
        enum: ['College', 'University']
    },
    schoolTypePublicPrivate: {
        type: String, 
        enum: ['Public', 'Private']
    },
    schoolMoto: {
        type: String,
        required: true
    },
    schoolCreatedAtDate: {
        type: Date,
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = mongoose.model('School', schoolSchema);