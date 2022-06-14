const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
    },
    Description: {
        type: String,
        required: true
    },
    Tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least one tag.'
        }
    },
    Price: {
        type: Number,
        required: true,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    CourseLevel: {
        type: String,
        enum: ['diploma', 'undergraduate', 'graduate', 'postgraduate', 'doctrate'],
        required: true
    },
    Subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

const Course = mongoose.model('Course', CourseSchema);