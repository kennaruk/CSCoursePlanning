module.exports = function(mongoose) {
    const joigoose = require('joigoose')(mongoose);
    const joi = require('joi');

    var joiUserSchema = Joi.object({
        name: Joi.string(),
        surname: Joi.string(),
        username: Joi.string(),
        password: Joi.string(),
        schedule: Joi.array()
    });

    var mongooseUserSchema = new Mongoose.Schema(Joigoose.convert(joiUserSchema));
    return mongoose.model('User', mongooseUserSchema);
}