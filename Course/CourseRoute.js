const express = require('express');
const router = express.Router();
const { CourseModel, validate } = require('./models/course');

router.get('/', async (req, res) => {
    const courses = await CourseModel.find().sort('name');
    res.send(courses);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let course = new CourseModel({
        name: req.body.name,
        author: req.body.author,
        tags: req.body.tags,
        isPublished: req.body.isPublished,
        price: req.body.price
    });
    course = await course.save();
    res.send(course);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = await CourseModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        tags: req.body.tags,
        isPublished: req.body.isPublished,
        price: req.body.price
    }, { new: true });

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

router.delete('/:id', async (req, res) => {
    const course = await CourseModel.findByIdAndRemove(req.params.id);

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

router.get('/:id', async (req, res) => {
    const course = await CourseModel.findById(req.params.id);

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

module.exports = router;