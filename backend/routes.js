const express = require('express')
const multer = require('multer')

const routes =  express.Router()
const upload = multer()

const PostController = require('./src/controllers/PostController')

routes.get('/posts',  PostController.index )
routes.post('/posts', upload.single('image'), PostController.store )

module.exports = routes