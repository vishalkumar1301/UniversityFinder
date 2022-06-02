var express = require('express');
var app = express();
var cors = require('cors');
var router = express.Router();
var SchoolRoute = require('./School/SchoolRoute');
var CourseRoute = require('./Course/CourseRoute');
var database = require('./database');

app.use(cors());

app.use('/', router);

router.use('/school', SchoolRoute);


app.listen(3000);