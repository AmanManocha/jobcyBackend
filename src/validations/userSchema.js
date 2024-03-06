const Joi = require('joi');

const Schema = {
    UserSignUP: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } }).required(),
        password: Joi.string().min(8).required(),
    }),
    UserSignIn: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    jobDetails: Joi.object({
        jobTitle: Joi.string().required(),
        jobDescription: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().pattern(/^\d{10}$/).required(),
        categories: Joi.string().required(),
        jobType: Joi.string().required(),
        designation: Joi.string().required(),
        salary: Joi.number().required(),
        qualification: Joi.string().required(),
        jobSkills: Joi.string().required(),
        applicationDeadlineDate: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required()
    })
}

module.exports = Schema;