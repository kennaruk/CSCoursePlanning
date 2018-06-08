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

router.get('/getsemester1', (req, res, next) => {
   todb.getCourseBySemester(1, (err, result) => {
       console.log('result:', result)
     res.json({ data : result })
   });
});

router.get('/getsemester2', (req, res, next) => {
    todb.getCourseBySemester(2,(err, result)=>{
      res.json({ data : result})
    })
 });

router.post('/register', (req, res, next) => {
    let payload = {
        email:      req.body.email,
        password:   req.body.password,
        name:       req.body.name,
        surname:    req.body.surname
    };

    todb.addUserByEmailAndPassword(payload, (err) => {
        console.log('addUser callback')
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
        // console.log(err)
        console.log('err:', err, 'user:', user)
        if(!err) {
            if(user) {
                res.json({
                    success: true,
                    message: "Login success",
                    data: user
                });
            } else {
                res.json({
                    success: false,
                    message: "Login not success",
                    data: user
                });
            }
        }
            
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

router.get('/getuser/:userid', (req, res, next) => {
    let userid = parseInt(req.params.userid);
    console.log('GetUserById');
    todb.getUserById(userid,(user,err)=>{
        if(!err){
            res.json({
                success: true,
                message: "Get userByid success",
                data: user
            });
        }
        else{
            res.json({
                success: false,
                message: err
            });
        }
    })
});

router.put('/updateuser/:userid', (req, res, next) => {
    let payload = {
        id : req.params.userid,
        name: req.body.name,
        surname:  req.body.surname,
        email:  req.body.email,
        username:  req.body.username,
        password:  req.body.password,
    }
    console.log('UpdateUserById');
    todb.updateUserById(payload,(err)=>{
        if(!err){
            res.json({
                success: true,
                message: "PUT updateUserByid success",
            });
        }
        else{
            res.json({
                success: false,
                message: err
            });    
        }
    })
});

router.delete('/deleteuser/:userid', (req, res, next) => {
    let userid = parseInt(req.params.userid);
    console.log('DeleteUserById');
    todb.deleteUserById(userid,(err)=>{
        if(!err){
            res.json({
                success: true,
                message: "DELETE deleteUserById success",
            });
        }
        else{
            res.json({
                success: false,
                message: err
            });
        }
    })
});

module.exports = router;
