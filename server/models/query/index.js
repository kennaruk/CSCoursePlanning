var bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
const saltRounds = 15;

//Models
var Models = require('../');
var Course = Models.Course;
var User = Models.User;

exports.getAllUser = (cb) => { 
    User.find(cb);
}

exports.getAllCourse = (cb) => {
    Course.find(cb);
}

exports.getCourseByYearAndSemester = (params, cb) => {
    let year = isNaN(params.year) ? null : +params.year;
    let semester = isNaN(params.semester) ? null : +param.semester;

    Course.find({}).exec()
        .then();
}

exports.addUserByEmailAndPassword = (params, cb) => {
    let email = params.email;
    let password = params.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {

    });
}

var addCourseSemester1 = (params, cb) => {
    let semester_1 = require('../../seed_files/semester_1.json');
    console.log(semester_1)
    // Course
}
addCourseSemester1();