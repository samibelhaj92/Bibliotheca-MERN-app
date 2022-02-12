const ReplySchema = require('../models/reply')

// Building Add reply function
// **C** 
// method post - AddReply
// req.body
// path /

exports.AddReply= async (req,res)=> {
       
        try {
    
            const newReply = new ReplySchema({...req.body, threadId:req.params.threadId, actorId:req.actor._id })

            await newReply.save()
    
            res.status(200).send({message:'congratulations, your reply is been successfully added', newReply})
    
        } catch (error) {
            res.status(500).send('Sorry, we could not add your reply. Please try again.')
        }
    }

// Building display list of replies function
// **R** 
// method get 1/2 - ShowReplies
// path /

exports.ShowReplies= async (req, res)=> {
    
    try {
        const Replies= await ReplySchema.find()
        res.status(200).send({message:'Here is the list of replies', Replies})

    } catch (error) {
        res.status(500).send('Sorry, we could not get the list of replies')
    }
}

// Building Show Reply details function
// **R**
// method get 2/2 - ShowReplyByID
// req.params
// path /:id

exports.ShowReplyByID= async (req,res)=>{
    const {id}= req.params
    try {
        const foundReply = await ReplySchema.findById(id)
        res.status(200).send({message:'Here is the reply', foundReply})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the reply with the id ${id}`)
    }
}

// Building Show Replies in the thread function
// **R**
// method get 3/3 - ShowRepliesByThread
// req.params
// path /:id

exports.ShowRepliesByThread= async(req,res)=>{
    const {threadId}=req.params
    try {
        const replies= await ReplySchema.find({threadId}) 


        res.status(200).send({message:'Here is the replies', replies})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the replies with the id ${threadId}`)
    }
}

// Building Edit Reply function
// **U**
// method put - UpdateReply
// req.params req.body
// path /:id

exports.UpdateReply= async (req,res)=>{
    const {id}= req.params
    try {
        const updated= await ReplySchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({message:'congratulations, your reply is been successfully updated', updated})
    } catch (error) {
        res.status(500).send(`Sorry, we could not update your reply with the id ${id}`)
    }
}

// Building Delete reply function
// **D**
// method delete - DeleteReply
// req.params
// path /:id

exports.DeleteReply= async (req,res)=>{
    const {id}=req.params
        try {
            const deleted= await ReplySchema.findByIdAndDelete(id)
            res.status(200).send({message:'congratulations, your reply is been successfully deleted', deleted})
        } catch (error) {
            res.status(500).send('Sorry, we could not delete your reply')
        }
    }