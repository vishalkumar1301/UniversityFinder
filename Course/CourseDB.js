const mongoose = require('mongoose');
const courseModel = require('./courseModel');




async function createCourse(course) {

    try {
        const result = await courseModel.create(course);
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

async function getCoursesByTagsAndName(tags, name) {
    try {
        return await CourseModel.find({ tags: { $in: tags.split(',') }, name: { $regex: name, $options: 'i' } });
    }
    catch (ex) {
        throw ex;
    }
}

async function getCourses() {
    try {
        return await CourseModel.find();
    }
    catch (ex) {
        throw ex;
    }
}

async function addSubject(courseId, subjectId) {
    try {
        const course = await CourseModel.findById(courseId);
        course.subjects.push(subjectId);
        return await course.save();
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = {
    createCourse,
    getCourseById,
    getCoursesByTagsAndName,
    getCourses,
    addSubject
}