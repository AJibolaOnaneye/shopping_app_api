const express = require('express');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();
const { signup, signin, signout} = require('../../controllers/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
// const User = require('../models/user');


router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup)
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/admin/signout', requireSignin, signout);



module.exports = router;