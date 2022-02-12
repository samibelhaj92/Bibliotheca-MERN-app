const BookshelfSchema = require('../models/bookshelf')
const ActorSchema = require("../models/auth")
// Building Add Bookshelf function
// **C** 
// method post - AddBookshelf
// req.body
// path /

exports.AddBookshelf= async (req,res)=> {
    const {Bookshelf_Label}=req.body    
        try {
            const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({msg:"you are not authorized"})}
            const newBookshelf = new BookshelfSchema({...req.body, actorId:req.actor._id})
    
            const found = await BookshelfSchema.findOne({Bookshelf_Label})
            if (found) {return res.status(400).send(`${Bookshelf_Label} is already exists. Please, choose another`)}
    
            await newBookshelf.save()
    
            res.status(200).send({message:'congratulations, your bookshelf is been successfully added', newBookshelf})
    
        } catch (error) {
            res.status(500).send('Sorry, we could not add your bookshelf. Please try again.')
        }
    }

// Building Show All Bookshelves function
// **R** 
// method get 1/2 - ShowBookshelves
// path /

exports.ShowBookshelves= async (req, res)=> {
    
    try {
        const Bookshelves= await BookshelfSchema.find()
        res.status(200).send({message:'Here is all the bookshelves', Bookshelves})

    } catch (error) {
        res.status(500).send('Sorry, we could not get all the bookshelves')
    }
}

// Building Show One Bookshelf function
// **R**
// method get 2/2 - ShowBookshelfByID
// req.params
// path /:id

exports.ShowBookshelfByID= async (req,res)=>{
    const {Bookshelf_id}= req.params
    try {
        const found = await BookshelfSchema.findById(Bookshelf_id)
        res.status(200).send({message:'Here is the bookshelf', found})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the bookshelf with the id ${Bookshelf_id}`)
    }
}

// Building Edit Bookshelf info function
// **U**
// method put - UpdateBookshelf
// req.params req.body
// path /:id

exports.UpdateBookshelf= async (req,res)=>{
    const {Bookshelf_id}= req.params
    try {
        const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({msg:"you are not authorized"})}
        const updated= await BookshelfSchema.findByIdAndUpdate(Bookshelf_id,{$set:{...req.body}})
        res.status(200).send({message:'congratulations, your bookshelf is been successfully updated', updated})
    } catch (error) {
        res.status(500).send(`Sorry, we could not update your bookshelf with the id ${Bookshelf_id}`)
    }
}

// Building Delete Bookshelf from the bookshelves function
// **D**
// method delete - DeleteBookshelf
// req.params
// path /:id

exports.DeleteBookshelf= async (req,res)=>{
    const {Bookshelf_id}=req.params
        try {
            const actor= await ActorSchema.findById(req.actor._id)
            console.log(actor)
            if (  actor.role==!'librarian') {return res.send({msg:"you are not authorized"})}
            const deleted= await BookshelfSchema.findByIdAndDelete(Bookshelf_id)
            res.status(200).send({message:'congratulations, your bookshelf is been successfully deleted', deleted})
        } catch (error) {
            res.status(500).send('Sorry, we could not delete your bookshelf')
        }
    }