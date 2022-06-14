var mongoose = require('mongoose');
var School = require('./SchoolModel');

async function getAllSchool() {
  try {
    const schools = await School.find({});
    return schools;
  } catch (err) {
    throw err;
  }
}

async function getSchools() {
  try {
    const schools = await School.find({});
    return schools;
  } catch (err) {
    throw err;
  }
}
async function getSchoolById(id) {
  try {
    const school = await School.findById(id);
    return school;
  } catch (err) {
    throw err;
  }
}

async function createSchool(school) {
  try {
    const newSchool = await School.create(school);
    return newSchool;
  } catch (err) {
    throw err;
  }
}

async function updateSchool(id, school) {
  try {
    const updatedSchool = await School.findByIdAndUpdate(id, school, {
      new: true
    });
    return updatedSchool;
  } catch (err) {
    throw err;
  }
}

async function deleteSchool(id) {
  try {
    const deletedSchool = await School.findByIdAndRemove(id);
    return deletedSchool;
  } catch (err) {
    throw err;
  }
}

async function addCourse(schoolId, courseId) {
  try {
    const newCourse = await School.findByIdAndUpdate(schoolId, {
      $push: {
        courses: courseId
      }
    }, {
      new: true
    });
    return newCourse;
  } catch (err) {
    throw err;
  }
}


module.exports = {
  getSchools,
  getAllSchool,
  getSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
  addCourse
};