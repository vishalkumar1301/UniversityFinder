const CourseDB = require('./CourseDB');

var courseService = {
    getCourses: async function () {
        try {
            return await CourseDB.getCourses();
        } catch (error) {
            throw error;
        }
    },
    getCourseById: async function (id) {
        try {
            return await CourseDB.getCourseById(id);
        } catch (error) {
            throw error;
        }
    },
    createCourse: async function (course) {
        try {
            return await CourseDB.createCourse(course);
        } catch (error) {
            throw error;
        }
    },
    updateCourse: async function (id, course) {
        try {
            return await CourseDB.updateCourse(id, course);
        } catch (error) {
            throw error;
        }
    },
    deleteCourse: async function (id) {
        try {
            return await CourseDB.deleteCourse(id);
        } catch (error) {
            throw error;
        }
    },
    addSubject: async function (courseId, subjectId) {
        try {
            return await CourseDB.addSubject(courseId, subjectId);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = courseService;