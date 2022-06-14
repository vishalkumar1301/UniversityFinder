const express = require('express');
const router = express.Router();
const SchoolService = require('./schoolService');
const SchoolModel = require('./SchoolModel');

router.get('/get-all-school', async (req, res) => {
    let schoolList = await SchoolService.getAllSchool();
    res.send(schoolList);
});
router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let school = await SchoolService.getSchoolById(id);
    res.send(school);
});
router.post('/', async (req, res) => {

    const Name = req.body.Name;
    const SchoolMoto = req.body.Moto;
    const SchoolType = req.body.Type;
    const SchoolTypePublicPrivate = req.body.TypePublicPrivate;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const Website = req.body.Website;
    const CreatedAtDate = req.body.CreatedAtDate;
    const Address = {
        LocationString: req.body.Address.LocationString,
        Street: req.body.Address.Street,
        City: req.body.Address.City,
        State: req.body.Address.State,
        ZipCode: req.body.Address.ZipCode,
        Country: req.body.Address.Country
    }

    const school = new SchoolModel({ Name, SchoolMoto, SchoolType, SchoolTypePublicPrivate, Email, PhoneNumber, Website, CreatedAtDate, Address });
    let createdSchool = await SchoolService.createSchool(school, res)
    return res.status(200).send(req.body);
});
router.put('/:id', async (req, res) => {
    await SchoolService.updateSchool(req, res);
});
router.delete('/:id', async (req, res) => {
    await SchoolService.deleteSchool(req, res);
});
router.post('/addCourse', async (req, res) => {
    await SchoolService.addCourse(req, res);
});

module.exports = router;