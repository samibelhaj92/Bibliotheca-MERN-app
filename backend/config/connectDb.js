const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Congratulations, MongoDB connection SUCCESS")
    } catch (error) {
        console.log({message:"MongoDB coonection unfortunately FAIL", error})
    }
}

module.exports=connectDb