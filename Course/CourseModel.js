const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
    },
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least one tag.'
        }
    },
    startedOn: { type: Date, default: Date.now },
    price: {
        type: Number,
        required: true,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    courseLevel: {
        type: String,
        enum: ['diploma', 'undergraduate', 'graduate', 'postgraduate', 'doctrate'],
        required: true
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

const Course = mongoose.model('Course', courseSchema);