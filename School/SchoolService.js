const SchoolDB = require('./SchoolDB');

var schoolService = {
    getSchools: async function () {
        try {
            return await SchoolDB.getSchools();
        } catch (error) {
            throw error;
        }
    },

    getAllSchool: async function () {
        try {
            return await SchoolDB.getAllSchool();
        } catch (error) {
            throw error;
        }
    },
    
    getSchoolById: async function (id) {
        try {
            return await SchoolDB.getSchoolById(id);
        } catch (error) {
            throw error;
        }
    },
    createSchool: async function (school) {
        try {
            return await SchoolDB.createSchool(school);
        } catch (error) {
            throw error;
        }
    },
    updateSchool: async function (id, school) {
        try {
            return await SchoolDB.updateSchool(id, school);
        } catch (error) {
            throw error;
        }
    },
    deleteSchool: async function (id) {
        try {
            return await SchoolDB.deleteSchool(id);
        } catch (error) {
            throw error;
        }
    },
    addCourse: async function (courseId, schoolId) {
        try {
            return await SchoolDB.addCourse(courseId, schoolId);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = schoolService;