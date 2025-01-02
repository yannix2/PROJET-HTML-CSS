const UserRoutes = require('express').Router();
const UserAuthentication = require('../controllers/authentification')

UserRoutes.post('/register',UserAuthentication.SignUp)
UserRoutes.post('/login',UserAuthentication.SignIn)

module.exports = UserRoutes;