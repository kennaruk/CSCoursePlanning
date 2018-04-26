var express = require('express');
var router = express.Router();

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
