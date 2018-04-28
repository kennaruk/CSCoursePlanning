var express = require('express');
var router = express.Router();
var todb = require('../models/query')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.json({ message: 'api page' });
});

router.get('/course/:year/:semester', (req, res, next) => {
    let year = parseInt(req.params.year);
    let semester = parseInt(req.params.semester);
    res.json({});
});

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

module.exports = router;
