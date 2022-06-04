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
            author: req.body.author,
            tags: req.body.tags,
            isPublished: req.body.isPublished,
            price: req.body.price
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