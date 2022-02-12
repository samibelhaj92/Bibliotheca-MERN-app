const BookSchema = require('../models/book')
const ActorSchema = require("../models/auth")

// Building Add Book function
// **C** 
// method post - AddBook
// req.body
// path /

exports.AddBook= async (req,res)=> {
    const {Book_Title}=req.body    
        try {

            const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({message:"Sorry, you are not authorized. Please identify yourself."})}

            const newBook = new BookSchema({...req.body, bookshelfId:req.params.bookshelfId, actorId:req.actor._id, Book_Cover: req.file.filename })
    
            const found = await BookSchema.findOne({Book_Title})
            if (found) {return res.status(400).send(`${Book_Title} is already exists. Please, choose another`)}
    
            await newBook.save()
    
            res.status(200).send({message:'congratulations, your book is been successfully added', newBook})
    
        } catch (error) {
            res.status(500).send(error)
        }
    }

// Building Show All Books function
// **R** 
// method get 1/3 - ShowBooks
// path /

exports.ShowBooks= async (req, res)=> {
    
    try {
        const Books= await BookSchema.find()
        res.status(200).send({message:'Here is all the books', Books})

    } catch (error) {
        res.status(500).send('Sorry, we could not get all the books')
    }
}

// Building Show One Book function
// **R**
// method get 2/3 - ShowBookByID
// req.params
// path /:id

exports.ShowBookByID= async (req,res)=>{
    const {id}= req.params
    try {
        const foundBook = await BookSchema.findById(id)
        res.status(200).send({message:'Here is the book', foundBook})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the book with the id ${id}`)
    }
}

// Building Show Books in the bookshelf function
// **R**
// method get 3/3 - ShowBooksByBookshelf
// req.params
// path /:id

exports.ShowBooksByBookshelf= async(req,res)=>{
    const {bookshelfId}=req.params
    try {
        const books= await BookSchema.find({bookshelfId}) 


        res.status(200).send({message:'Here is the book', books})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the book with the id ${bookshelfId}`)
    }
}

// Building Edit Book info function
// **U**
// method put - UpdateBook
// req.params req.body
// path /:id

exports.UpdateBook= async (req,res)=>{
    const {id}= req.params
    try {
        const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({message:"Sorry, you are not authorized. Please identify yourself."})}
        const updated= await BookSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({message:'congratulations, your book is been successfully updated', updated})
    } catch (error) {
        res.status(500).send(`Sorry, we could not update your book with the id ${id}`)
    }
}

// Building Delete Book from the bookshelf function
// **D**
// method delete - DeleteBook
// req.params
// path /:id

exports.DeleteBook= async (req,res)=>{
    const {id}=req.params
        try {
            const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({message:"Sorry, you are not authorized. Please identify yourself."})}
            const deleted= await BookSchema.findByIdAndDelete(id)
            res.status(200).send({message:'congratulations, your book is been successfully deleted', deleted})
        } catch (error) {
            res.status(500).send('Sorry, we could not delete your book')
        }
    }