var express = require('express');
var router = express.Router();
var todb = require('../models/query')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ message: 'api page' });
});

router.get('/course/:year/:semester', function(req, res, next) {
    let year = parseInt(req.params.year);
    let semester = parseInt(req.params.semester);
    
    
});