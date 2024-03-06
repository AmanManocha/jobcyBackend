const signin = require('./signIn')
const signup = require('./signUp')
const jobDetails = require('./jobDetails')
const getJobDetails = require('./getJobDetails')
const updateJobDetails = require('./updateJobDetails')
const deleteJobDetails = require('./deleteJobDetails')
module.exports = {
    signin,
    signup,
    jobDetails,
    getJobDetails,
    updateJobDetails,
    deleteJobDetails
};