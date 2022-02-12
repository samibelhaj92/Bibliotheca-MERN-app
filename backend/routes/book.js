const express = require('express')
const { AddBook, ShowBooks, ShowBookByID, UpdateBook, DeleteBook , ShowBooksByBookshelf} = require('../Controlers/book')
const { isAuth } = require('../middlewares/isAuth')
const { upload } = require('../middlewares/Upload')
const BookRoute = express.Router()

BookRoute.post('/:bookshelfId/addBook', upload.single("Book_Cover"), isAuth, AddBook)

BookRoute.get('/showBooks',isAuth, ShowBooks)

BookRoute.get('/showBooks/:bookshelfId',isAuth, ShowBooksByBookshelf)

BookRoute.get('/:id', isAuth, ShowBookByID)

BookRoute.put('/:id', isAuth, UpdateBook)

BookRoute.delete('/:id', isAuth, DeleteBook)

module.exports = BookRoute