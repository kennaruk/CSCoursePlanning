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

exports.getCourseBySemester = (semester, cb) => {
    Course.find({semester: semester}).exec(cb);
}

exports.addUserByEmailAndPassword = (params, cb) => {
    let email = params.email;
    let password = params.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {

    });
}

exports.removeAllCourse = (cb) => {
    Course.remove({}).exec(cb);
}

exports.addCourseSemester1 = (cb) => {
    let semester_1 = require('../../seed_files/semester_1.json');
    let itemProcessed = 0;

    semester_1.forEach(datum => {
        itemProcessed++;
        datum.semester = 1;

        let course = new Course(datum);
        course.save();

        if(itemProcessed === semester_1.length)
            cb();
    })
}

exports.addCourseSemester2 = (cb) => {
    let semester_2 = require('../../seed_files/semester_2.json');
    let itemProcessed = 0;
    
    semester_2.forEach(datum => {
        itemProcessed++;
        datum.semester = 2;

        let course = new Course(datum)
        course.save();

        if(itemProcessed === semester_2.length)
            cb();
    });
}

