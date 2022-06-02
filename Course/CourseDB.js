const mongoose = require('mongoose');
const courseModel = require('./courseModel');


async function getCourses() {
    return await CourseModel
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 });
}

async function createCourse(name, tags, startedOn, price, courseLevel) {
    const course = new CourseModel({
        name,
        tags,
        startedOn,
        price,
        courseLevel
    });

    try {
        const result = await course.save();
        return result;
    }
    catch (ex) {
        throw ex;
    }
}

async function getCourseById(id) {
    try {
        return await CourseModel.findById(id);
    }
    catch (ex) {
        throw ex;
    }
}

async function getCoursesByTags(query) {
    try {
        return await CourseModel.find({ tags: { $in: query.split(',') } });
    }
    catch (ex) {
        throw ex;
    }
}