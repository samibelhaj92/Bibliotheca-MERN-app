const mongoose=require('mongoose')

// Building the book schema model 
// **BookSchema**

const BookSchema = new mongoose.Schema({

    Book_ISBN: {type: Number},

    Book_Title: {type: String,
                required: true},

    Book_Author: {type: String},

    Book_PublishYear: {type: Number},

    Book_Category: {type: String},

    Book_Genre: {type: String},

    Book_Publisher: {type: String},

    Book_Summary: {type: String},

    Book_Evaluation: {
                    type: Number,
                    default: 0,
                    min:0,
                },

    Book_CoupDeFoudre: {
                    type: Number,
                    default: 0,
                    min: 0,                    
                },

    Book_NumberOfCopies: {
                    type: Number,
                    default: 1,
                    min: 1,
                },

    Book_Condition: {type: String,
                    enum: ["new", "good", "used", "fragile"]
                    },

    Book_Cover: {type: String},

    Book_Status: {type: String,
                enum: ["available", "borrowed", "lost"]
            },

    createdAt: {type: Date, 
                    'default': Date.now, 
                    index: true},

    updatedAt: {type: Date, 
                'default': Date.now, 
                index: true},

    bookshelfId:{type: mongoose.Schema.Types.ObjectId, 
                ref: 'Bookshelf'},

    actorId:{ type: mongoose.Schema.Types.ObjectId, 
            ref: 'Actor'}
}
)

module.exports=mongoose.model('Book', BookSchema)