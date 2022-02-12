const mongoose = require('mongoose')

// Building the Actor schema model (the user model) 
// **ActorSchema**

const ActorSchema = new mongoose.Schema({
        
        email: {type:String, 
                required:true, 
                unique:true},

        password: {type:String, 
                required:true},
        
        role : {type: String,
                enum: ["reader", "librarian", "admin"],
                },

        pseudo: {type:String, 
                required:true, 
                unique:true},

        avatar:{type:String, 
                required:true},

        created: {type: Date, 
                'default': Date.now, 
                index: true},

});

module.exports= mongoose.model('Actor', ActorSchema)