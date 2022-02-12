const express = require('express')
const { AddBookshelf, ShowBookshelves, ShowBookshelfByID, UpdateBookshelf, DeleteBookshelf } = require('../Controlers/bookshelf')
const { isAuth } = require('../middlewares/isAuth')
const BookshelfRoute = express.Router()

BookshelfRoute.post('/addBookshelf', isAuth, AddBookshelf)

BookshelfRoute.get('/showBookshelves', isAuth, ShowBookshelves)

BookshelfRoute.get('/:id', isAuth, ShowBookshelfByID)

BookshelfRoute.put('/:id', isAuth, UpdateBookshelf)

BookshelfRoute.delete('/:id', isAuth, DeleteBookshelf)

module.exports = BookshelfRoute