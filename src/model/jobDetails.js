const mongoose = require('mongoose');
const Users = require('./userSchema')
const jobDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    jobTitle: { type: String, required: true},
    jobDescription: { type: String, required: true},
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true},
    categories: { type: String, required: true},
    jobType: { type: String, required: true},
    designation: { type: String, required: true},
    salary: { type: String, required: true},
    qualification: { type: String, required: true},
    jobSkills: { type: String, required: true},
    applicationDeadlineDate: { type: String, required: true},
    country: { type: String, required: true},
    city: { type: String, required: true},
    zipCode: { type: String, required: true},
  });

  const jobDetails = mongoose.model('jobDetails', jobDetailsSchema);

module.exports = jobDetails;