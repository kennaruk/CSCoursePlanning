var express = require('express');
var bodyParser = require('body-parser')
var todb = require('../models/query')
var router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router.get('/', (req, res, next) => {
    res.json({ message: 'api page' });
});

router.get('/course/semester/:semester', (req, res, next) => {
    let semester = parseInt(req.params.semester);
    todb.getCourseBySemester(semester, (err, courses) => {
        if(err)
            res.json({
                success: false,
                message: err,
            });
        else
            res.json({
                success: true,
                message: "get courses on semester " + semester,
                data: courses
            });
    });
});

//TODO: refractor function as promise
router.get('/re-fetch', (req, res, next) => {
    todb.removeAllCourse(() => {
     todb.addCourseSemester1(() => {
     todb.addCourseSemester2(() => {
        res.json({
            success: true,
            message: "Remove and re-fetch all courses success."
        });
     });
     });
    });
});

router.post('/register', (req, res, next) => {
    let payload = {
        email:      req.body.email,
        password:   req.body.password,
        name:       req.body.name,
        surname:    req.body.surname
    };

    todb.addUserByEmailAndPassword(payload, (err) => {
        if(err)
            res.json({
                success: false,
                message: err
            });
        else
            res.json({
                success: true,
                message: "Register Success"
            });
    })
});

router.post('/login', (req, res, next) => {
    let payload = {
        usernameOrEmail: req.body.usernameOrEmail,
        password:        req.body.password
    };
    todb.getUserByEmailAndPassword(payload, (err, user) => {
        if(!err)
            res.json({
                success: true,
                message: "Get user success",
                data: user
            });
        else
            res.json({
                success: false,
                message: err
            });
    });
});

router.get('/auth/facebook/callback', (req, res, next) => {
    console.log('auth callback called');
    res.json({
       success: true,
       message: "OAuth facebook called" 
    });
});

module.exports = router;
