const Joi = require('joi');

const Schema = {
    UserSignUP: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } }).required(),
        password: Joi.string().min(8).required(),
        // password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-zA-Z])(?=.*\\d).{8,}$')).required(),
    }),
    UserSignIn: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
}

module.exports = Schema;