const express = require('express');
const router = express.Router();
const SchoolService = require('./schoolService');

router.get('/', () => {
    SchoolService.getAllSchool();
});
router.get('/:id', (req, res) => {
    let id = req.params.id;
    SchoolService.getSchoolById(id);

});
router.post('/', async (req, res) => {
    console.log(req.body);
    // const schoolName = req.query.schoolName,
    //     schoolAddress = req.query.schoolAddress,
    //     schoolPhone = req.query.schoolPhone,
    //     schoolEmail = req.query.schoolEmail,
    //     schoolWebsite = req.query.schoolWebsite,
    //     schoolType = req.query.schoolType,
    //     schoolMoto = req.query.schoolMoto,
    //     schoolCreatedAtDate = req.query.schoolCreatedAtDate;

    // const school = new School({
    //     name: schoolName,
    //     address: schoolAddress,
    //     phone: schoolPhone,
    //     email: schoolEmail,
    //     website: schoolWebsite,
    //     schoolType: schoolType,
    //     schoolMoto: schoolMoto,
    //     createdAtDate: schoolCreatedAtDate
    // });
    // let createdSchool = await SchoolService.createSchool(school, res)
    return res.status(200).send(req.body);
});
router.put('/:id', (req, res) => {
    SchoolService.updateSchool(req, res);
});
router.delete('/:id', (req, res) => {
    SchoolService.deleteSchool(req, res);
});
router.post('/addCourse', (req, res) => {
    SchoolService.addCourse(req, res);
});

module.exports = router;