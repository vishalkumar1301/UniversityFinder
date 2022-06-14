const express = require('express');
const router = express.Router();
const CourseService = require('./courseService');

router.get('/', async (req, res) => {
    try {
        const courses = await CourseService.getCourses();
        res.send(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {

        let course = new CourseModel({
            name: req.body.name,
            tags: req.body.tags,
            price: req.body.price,
            courseLevel: req.body.courseLevel,
        });

    try {
        await CourseService.createCourse(course);
        res.status(200).send();
    } catch (error) {
        res.send(error.message);
    }
});

router.post('/addSubject', async (req, res) => {
    try {
        await CourseService.addSubject(req.body.courseId, req.body.subjectId);
        res.status(200).send();
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;