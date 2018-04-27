var bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;

//Models
var Models = require('../');
var Course = Models.Course;
var User = Models.User;

exports.getAllUser = (cb) => { 
    User.find(cb);
}

exports.getAllCourse = (cb) => {
    Course.find(cb)
}