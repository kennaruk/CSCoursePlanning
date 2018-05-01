module.exports = function(mongoose) {
    const Joigoose = require('joigoose')(mongoose);
    const Joi = require('joi');

    var joiUserSchema = Joi.object({
        name: Joi.string(),
        surname: Joi.string(),
        email: Joi.string().email(),
        username: Joi.string(),
        password: Joi.string(),
        schedule: Joi.array()
    });

    var mongooseUserSchema = new mongoose.Schema(Joigoose.convert(joiUserSchema));
    return mongoose.model('User', mongooseUserSchema);
}