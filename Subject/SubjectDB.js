const mongoose = require('mongoose');
const subjectModel = require('./subjectModel');




async function createSubject(subject) {

    try {
        const result = await subjectModel.create(subject);
        return result;
    }
    catch (ex) {
        throw ex;
    }
}

async function getSubjectById(id) {
    try {
        return await subjectModel.findById(id);
    }
    catch (ex) {
        throw ex;
    }
}

async function getSubjects() {
    try {
        return await subjectModel.find();
    }
    catch (ex) {
        throw ex;
    }
}

async function updateSubject(id, subject) {
    try {
        return await subjectModel.findByIdAndUpdate(id, subject, { new: true });
    }
    catch (ex) {
        throw ex;
    }
}

async function deleteSubject(id) {
    try {
        return await subjectModel.findByIdAndDelete(id);
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = {
    createSubject,
    getSubjectById,
    getSubjects,
    updateSubject,
    deleteSubject
}