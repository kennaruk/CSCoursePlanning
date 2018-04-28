const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connection Established. At', MONGODB_URI);
    })
    .catch(err => {
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    });

exports.Course   = require('./course.js')(mongoose);
exports.User     = require('./user.js')(mongoose);


