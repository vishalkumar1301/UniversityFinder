const SubjectDB = require('./SubjectDB');

var subjectService = {
    getSubjects: async function () {
        try {
            return await SubjectDB.getSubjects();
        } catch (error) {
            throw error;
        }
    },
    getSubjectById: async function (id) {
        try {
            return await SubjectDB.getSubjectById(id);
        } catch (error) {
            throw error;
        }
    },
    createSubject: async function (subject) {
        try {
            return await SubjectDB.createSubject(subject);
        } catch (error) {
            throw error;
        }
    },
    updateSubject: async function (id, subject) {
        try {
            return await SubjectDB.updateSubject(id, subject);
        } catch (error) {
            throw error;
        }
    },
    deleteSubject: async function (id) {
        try {
            return await SubjectDB.deleteSubject(id);
        } catch (error) {
            throw error;
        }
    },
};

module.exports = subjectService;