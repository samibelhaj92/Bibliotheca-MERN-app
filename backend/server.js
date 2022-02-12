const express = require("express")
const connectDb = require("./config/connectDb")

const AuthRoute = require("./routes/auth")
const BookRoute = require("./routes/book")
const BookshelfRoute = require("./routes/bookshelf")
const ReplyRoute = require("./routes/reply")
const ThreadRoute = require("./routes/thread")

require('dotenv').config()

const app = express()

connectDb()

app.use(express.json())

app.use('/api/auth', AuthRoute)
app.use('/api/bookshelf', BookshelfRoute)
app.use('/api/book', BookRoute)
app.use('/api/thread', ThreadRoute)
app.use('/api/reply', ReplyRoute)


app.listen(process.env.port, () => 
console.log(`Your server is running on port ${process.env.port}`))