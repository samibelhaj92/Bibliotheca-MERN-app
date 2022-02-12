const express = require('express')
const { AddThread, ShowThreads, ShowThreadByID, UpdateThread, DeleteThread } = require('../Controlers/thread')
const { isAuth } = require('../middlewares/isAuth')
const ThreadRoute = express.Router()

ThreadRoute.post('/addThread', isAuth, AddThread)

ThreadRoute.get('/showThreads', isAuth, ShowThreads)

ThreadRoute.get('/:id', isAuth, ShowThreadByID)

ThreadRoute.put('/:id', isAuth, UpdateThread)

ThreadRoute.delete('/:id', isAuth, DeleteThread)

module.exports = ThreadRoute