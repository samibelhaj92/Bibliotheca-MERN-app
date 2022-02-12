const mongoose=require('mongoose')

// Building the bookshelf schema model 
// **BookshelfSchema**

const BookshelfSchema= new mongoose.Schema({
    
    Bookshelf_Label: {type: String,
                        required: true},

    Bookshelf_Category: {type: String,
                        required: true},

    Bookshelf_Rules: {type: String,
                    required: true},
    
    createdAt: {type: Date, 
            'default': Date.now, 
            index: true},

    actorId:{ type: mongoose.Schema.Types.ObjectId, 
                ref: 'Actor'}

})

module.exports=mongoose.model('Bookshelf', BookshelfSchema)