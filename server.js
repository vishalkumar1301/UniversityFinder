var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

var passportSetup = require('./Authentication/passport.js');
var router = express.Router();
var SchoolRoute = require('./School/SchoolRoute');
var CourseRoute = require('./Course/CourseRoute');
var SubjectRoute = require('./Subject/SubjectRoute');
var HomeRouter = require('./Home/HomeRouter');
var AdminRouter = require('./Admin/AdminRouter');
var {authenticationRequired, profileAuthorizationRequired} = require('./Authentication/authentication');
const { profile } = require('console');
require('./database');


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let passport = passportSetup(app);

app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/login', passport.authenticate('oidc'));
app.use('/profile', passport.authenticate('profile'));
app.use('/authorization-code/callback',
  passport.authenticate('oidc', { failureRedirect: '/error' }),
  (req, res) => {
    console.log(req);
    res.redirect('/home');
  }
);

app.use('/authorization-code/callback2',
  passport.authorize('profile', { failureRedirect: '/error' }),
  (req, res) => {
    console.log(req);
    res.redirect('/home');
  }
);
app.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/home');
});

router.use('/home', HomeRouter);
router.use('/school', SchoolRoute);
router.use('/course', CourseRoute);
router.use('/subject', SubjectRoute);
router.use('/admin', AdminRouter);

app.listen(3000);