const express = require('express');
const { signin, signup } = require('../controller/index.js');
const verifyToken = require('../middelware/authMiddelware.js');
const { addUserSignInValidation, addUserSignUpValidation } = require('../validations/userValidation.js');
const router = express.Router();


router.post('/signUp', addUserSignUpValidation, signup) 
router.post('/signIn',addUserSignInValidation,signin )

module.exports = { authRoutes: router };