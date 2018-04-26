module.exports = function(mongoose) {
    const joigoose = require('joigoose')(mongoose)
    const joi = require('joi')
    var joiCourseSchema = Joi.object({
        courseId: Joi.string(),
        courseName: Joi.string(),
        prerequisite: Joi.string(),
        credit: Joi.number(),
        days: Joi.array().items(Joi.string()),
        startTime: Joi.string(),
        endTime: Joi.string(),
        timeFormat: Joi.string()
    })
    var mongooseCourseSchema = new Mongoose.Schema(Joigoose.convert(joiCourseSchema));
    return mongoose.model('Course', mongooseUserSchema);
}