const { Router} = require('express');
const userrouter = Router();

const {signup, login} = require('../Controller/user-controller')

userrouter.post('/login', login)
userrouter.post('/signup', signup)


module.exports = userrouter;

