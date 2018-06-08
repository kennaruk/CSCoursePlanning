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
    let name = params.name;
    let surname = params.surname;


    bcrypt.hash(password, saltRounds, (err, hash) => {
        console.log('addUserByEmailPassword hash:', hash)
        if(err)
            cb(err);
        else {
            let user = new User();
            user.name = name;
            user.surname = surname;
            user.email = email;
            user.username = email.split('@')[0];
            user.password = hash;
            user.save().then(() => {
                //TODO: set Time out when connection off
                console.log(err)
                cb(err);
            }).catch((err) => {
                cb(err);
            });
        }
    });
}

exports.getUserByEmailAndPassword = (params, cb) => {
    let usernameOrEmail = params.usernameOrEmail;
    let password        = params.password;

    User.findOne({email: usernameOrEmail}, (err, user) => {
        if(!user) {
            User.findOne({username: usernameOrEmail.split('@')[0]}, (err, user) => {
                if(!user)
                    cb(err, null);
                else
                    if(bcrypt.compareSync(user.password, password))
                        cb(err, user);
                    else
                        cb(err, null);
            });
        } else 
            if(bcrypt.compareSync(user.password, password))
                cb(err, user);
            else
                cb(err, null);
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

exports.getUserById = (id,cb) =>{
    User.findOne({_id : id}, (err,user)=>{
        if(err)
            cb(err, null)
        else{
            cb(user, null)
        }
    })
}

exports.updateUserById = (payload,cb) =>{
    
    // User.findOne({_id : payload.id}, (err,user)=>{
    //     if(err)
    //         cb(err)
    //     else{
    //         user._id = payload.id;
    //         user.name = payoad.surname;
    //         user.email = payload.email;
    //         user.username = payload.username;
    //         user.password = payload.password;
    //         user.save().then(()=>cb())
    //         .catch(err => cb(err)) 
    //     }
    // })

    User.update({_id:payload.id},payload)
    .then(()=>{
        cb();
    })
    .catch(err =>{
        cb(err);
    })
}

exports.deleteUserById = (id,cb) =>{
    User.remove({_id:id})
    .then(()=>{
        cb();
    })
    .catch(err =>{
        cb(err);
    })
}