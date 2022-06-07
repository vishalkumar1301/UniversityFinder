const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'basic demo', isAuthenticated: true});
    // res.render('home', {title: 'basic demo', isAuthenticated: req.isAuthenticated()});
});

module.exports = router;