const express = require('express');
const { signin, signup, jobDetails, getJobDetails, updateJobDetails, deleteJobDetails } = require('../controller/index.js');
const verifyToken = require('../middelware/authMiddelware.js');
const { addUserSignInValidation, addUserSignUpValidation, addJobDetailsValidation } = require('../validations/userValidation.js');
const router = express.Router();


router.post('/signUp', addUserSignUpValidation, signup) 
router.post('/signIn',addUserSignInValidation,signin )
router.post('/jobDetails',addJobDetailsValidation, verifyToken, jobDetails)
router.get('/getJobDetails', verifyToken, getJobDetails)
router.put('/updateJobDetails', verifyToken, updateJobDetails)
router.delete('/deleteJobDetails', verifyToken, deleteJobDetails)

module.exports = { authRoutes: router };