const express = require('express');
const router = express.Router();
const validationFields = require('../middlewares/validationsFields');
const registerValidator = require('../validations/registerValidator');
const { userCreate, userLogin} = require('../controllers/userController');




router /*endpoint - api/auth/new*/ 
.post('/new',registerValidator,validationFields,userCreate)

module.exports = router;
