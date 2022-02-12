const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const ActorSchema = require("../models/auth")

// Building Sign UP function
exports.Register= async (req,res) => {
    
    const {email, password, pseudo,avatar,role}= req.body
    try {
        
        const actor = new ActorSchema({...req.body,  avatar: req.file.filename})
console.log(req.body)
        // Verifiying the existence of the mail adress
        
        const found = await ActorSchema.findOne({email})

        if (found) {return res.status(400).send({errors: [{message:"Sorry, this email adress is already exists. Please, try again."}]})}

        // Verifiying the existence of the mail adress

        const foundPseudo = await ActorSchema.findOne({pseudo})

        if (foundPseudo) {return res.status(400).send({errors: [{message:"Sorry, this pseudo is already exists. Please, try again."}]})}


        // Hashing/Crypting the password
        const salt = 10
        const hashedpassword = await bcrypt.hash(password, salt)
        actor.password= hashedpassword

        // generating the token
        const payload = {id: actor._id}
        const token = jwt.sign(payload, process.env.SecretOrKey)

        // saving the user credintials into the db
        await actor.save()

        res.status(200).send({message:' Congratulations, you have been registerd successfully', actor, token})

    } catch (error) {
        res.status(500).send({errors: [{message:"Sorry, we could not register you. Please, try again."}]})      
    }
}

// Building Sign In function
exports.Login= async (req,res)=>{

    const {email, password}=req.body
    try {
        const actor= await ActorSchema.findOne({email})
        if (!actor) {return res.status(400).send({errors: [{message:'Sorry, bad credentials. Please check again'}]})}

        const match = await bcrypt.compare(password, actor.password)
        if (!match) {return res.status(400).send({errors: [{message:'Sorry, bad credentials. Please check again'}]})}

        const payload = {id: actor._id}
        const token = jwt.sign(payload, process.env.SecretOrKey)
        
        res.status(200).send({message:'Congratulations, you have been log in successfully', actor, token})

    } catch (error) {
        res.status(500).send({errors: [{message:"Sorry, could not login. Please check your credentials."}]})
    }
}
exports.getActors= async (req, res)=> {

    try {
        const actors= await ActorSchema.find()
        res.status(200).send({message:'Here is all the users', actors})

    } catch (error) {
        res.status(500).send('Sorry, we could not get all the users')
    }
}
