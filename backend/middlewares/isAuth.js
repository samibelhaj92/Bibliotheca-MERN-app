const jwt= require('jsonwebtoken')
const ActorSchema= require('../models/auth')

// Building Authorization middleware
exports.isAuth= async (req,res,next)=>{

    const token= req.header('authorization')
    
    try {
        if (!token) {res.status(400).send({errors:[{message:"Sorry, you are not authorized. Please check your credentials"}]})}
        
        var decoded= jwt.verify(token, process.env.SecretOrKey)
        const actor = await ActorSchema.findById(decoded.id)
        req.actor=actor
        next()
    } catch (error) {
        res.status(500).send('A server error has occurred')
    }
}