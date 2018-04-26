const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/test';

mongoose.connect(MONGODB_URI)
    .then(() => {

    })
    .catch(err => {
        logger.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
        console.error(err)
    });

exports.Course   = require('./course.js')(mongoose);
exports.User     = require('./user.js')(mongoose);


