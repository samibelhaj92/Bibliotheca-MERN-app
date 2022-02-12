const express = require('express')
const { AddReply, ShowReplies, ShowReplyByID, UpdateReply, DeleteReply,ShowRepliesByThread } = require('../Controlers/reply')
const { isAuth } = require('../middlewares/isAuth')
const ReplyRoute = express.Router()

ReplyRoute.post('/:threadId/addReply', isAuth, AddReply)

ReplyRoute.get('/showReplies', isAuth, ShowReplies)

ReplyRoute.get('/showReplies/:threadId',isAuth, ShowRepliesByThread)

ReplyRoute.get('/:id', isAuth, ShowReplyByID)

ReplyRoute.put('/:id', isAuth, UpdateReply)

ReplyRoute.delete('/:id', isAuth, DeleteReply)

module.exports = ReplyRoute