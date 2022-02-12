const mongoose=require('mongoose')

// Building the reply schema model 
// **ReplySchema**

const ReplySchema= new mongoose.Schema({
    
    Reply_Content: {type: String,
                    required: true},
    
    createdAt: {type: Date, 
            'default': Date.now, 
            index: true},
    
    threadId:{type: mongoose.Schema.Types.ObjectId, 
            ref: 'Thread'},

    actorId:{ type: mongoose.Schema.Types.ObjectId, 
            ref: 'Actor'}
})

module.exports=mongoose.model('Reply', ReplySchema)