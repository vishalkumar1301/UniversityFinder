const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        State: {
            type: String,
            required: true
        },
        Country: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        ZipCode: {
            type: String,
            required: true
        },
        LocationString: {
            type: String,
            required: true
        }
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    },
    Type: {
        type: String, 
        enum: ['College', 'University']
    },
    TypePublicPrivate: {
        type: String, 
        enum: ['Public', 'Private']
    },
    Moto: {
        type: String,
        required: true
    },
    SchoolCreatedAtDate: {
        type: Date,
    },
    Courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = mongoose.model('School', schoolSchema);