const mongoose=require('mongoose')

// Building the thread schema model 
// **ThreadSchema**

const ThreadSchema= new mongoose.Schema({

    Thread_Content: {type: String,
                    required: true},
    
    createdAt: {type: Date, 
            'default': Date.now, 
            index: true},
    
    actorId:{ type: mongoose.Schema.Types.ObjectId, 
            ref: 'Actor'}
})

module.exports=mongoose.model('Thread', ThreadSchema)