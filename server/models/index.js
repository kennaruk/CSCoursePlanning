const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connection Established. At', MONGODB_URI);
        exports.Course   = require('./course.js')(mongoose);
        exports.User     = require('./user.js')(mongoose);
    })
    .catch(err => {
        console.log('MongoDB Connection At \'', MONGODB_URI, '\' Error. Please make sure that MongoDB is running.');
        console.log('*** Server will error if you dont fixed ***')
    });



