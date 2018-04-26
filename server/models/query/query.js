var bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;

//Models
var Models = require('../');
var Course = Models.Course;
var User = Models.User;

exports.getAllUser = function(cb) { 
    User.find(cb);
}