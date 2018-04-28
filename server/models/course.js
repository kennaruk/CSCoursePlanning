module.exports = function(mongoose) {
    const Joigoose = require('joigoose')(mongoose);
    const Joi = require('joi');

    var joiCourseSchema = Joi.object({
        courseId: Joi.string(),
        courseName: Joi.string(),
        prerequisite: Joi.string(),
        credit: Joi.number(),
        days: Joi.array().items(Joi.string()),
        startTime: Joi.string(),
        endTime: Joi.string(),
        timeFormat: Joi.string()
    });

    var mongooseCourseSchema = new mongoose.Schema(Joigoose.convert(joiCourseSchema));
    return mongoose.model('Course', mongooseCourseSchema);
}