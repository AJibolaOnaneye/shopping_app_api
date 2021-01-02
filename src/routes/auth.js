const express = require('express');
const { signup, signin} = require('../controllers/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest} = require('./validators/auth');
const router = express.Router();
// const User = require('../models/user');


router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);




module.exports = router;