const Router = require('express')
const { signUp, signIn } = require('../service/userPfService')

const userPfRoute = Router()

userPfRoute.post('/userPfRoute/signup', signUp)
userPfRoute.post('/userPfRoute/signin', signIn)

module.exports = userPfRoute
