const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
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