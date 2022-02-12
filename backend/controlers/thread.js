const ThreadSchema = require('../models/thread')

// Building Add thread function
// **C** 
// method post - AddThread
// req.body
// path /

exports.AddThread= async (req,res)=> {
    const {Thread_Content}=req.body    
        try {
            const newThread = new ThreadSchema(req.body)
    
            const found = await ThreadSchema.findOne({Thread_Content})
            if (found) {return res.status(400).send(`${Thread_Content} is already exists. Please, choose another.`)}
    
            await newThread.save()
    
            res.status(200).send({message:'congratulations, your thread is been successfully added', newThread})
    
        } catch (error) {
            res.status(500).send('Sorry, we could not add your thread. Please try again.')
        }
    }

// Building display list of Threads function
// **R** 
// method get 1/2 - ShowThreads
// path /

exports.ShowThreads= async (req, res)=> {
    
    try {
        const Threads= await ThreadSchema.find()
        res.status(200).send({message:'Here is the list of threads', Threads})

    } catch (error) {
        res.status(500).send('Sorry, we could not get the list of threads')
    }
}

// Building Show Thread details function
// **R**
// method get 2/2 - ShowThreadByID
// req.params
// path /:id

exports.ShowThreadByID= async (req,res)=>{
    const {id}= req.params
    try {
        const foundThread = await ThreadSchema.findById(id)
        res.status(200).send({message:'Here is the thread', foundThread})
    } catch (error) {
        res.status(500).send(`Sorry, we could not get the thread with the id ${id}`)
    }
}

// Building Edit Thread details function
// **U**
// method put - UpdateThread
// req.params req.body
// path /:id

exports.UpdateThread= async (req,res)=>{
    const {id}= req.params
    try {
        const updated= await ThreadSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({message:'congratulations, your thread is been successfully updated', updated})
    } catch (error) {
        res.status(500).send(`Sorry, we could not update your thread with the id ${id}`)
    }
}

// Building Delete thread function
// **D**
// method delete - DeleteThread
// req.params
// path /:id

exports.DeleteThread= async (req,res)=>{
    const {id}=req.params
        try {
            const deleted= await ThreadSchema.findByIdAndDelete(id)
            res.status(200).send({message:'congratulations, your thread is been successfully deleted', deleted})
        } catch (error) {
            res.status(500).send('Sorry, we could not delete your thread')
        }
    }