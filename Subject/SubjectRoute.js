const express = require('express');
const router = express.Router();
const SubjectService = require('./subjectService');

router.get('/', async (req, res) => {
    try {
        const subjects = await SubjectService.getSubjects();
        res.send(subjects);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {

        let subject = new SubjectModel({
            name: req.body.name,
            code: req.body.code,
            tags: req.body.tags,
            description: req.body.description,
        });

    try {
        await SubjectService.createSubject(subject);
        res.status(200).send();
    } catch (error) {
        res.send(error.message);
    }
});
module.exports = router;