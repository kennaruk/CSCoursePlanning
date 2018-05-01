var express = require('express');
var bodyParser = require('body-parser')
var todb = require('../models/query')
var router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router.get('/', (req, res, next) => {
    res.json({ 
        message:    'HTTP server listen on port: 3500\
                    HTTPS server listen on port: 4000\
                    api server please visit /api/v1' 
    });
});

module.exports = router;