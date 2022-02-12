const express = require("express")
const { RegisterValidation, Validation } = require("../middlewares/Register")
const { isAuth } = require("../middlewares/isAuth")
const { Register, Login, getActors } = require("../controlers/auth")
const { upload } = require("../middlewares/Upload")
const AuthRoute = express.Router()


AuthRoute.post('/signUp',  upload.single("avatar"),RegisterValidation, Validation,  Register)

AuthRoute.post('/signIn', Login)

AuthRoute.get('/current', isAuth, (req,res)=> res.send(req.actor))

AuthRoute.get('/AllActors', isAuth, getActors)


module.exports = AuthRoute