const Post = require('../models/Post')

module.exports = {
    async index( req, res ){
        const posts = await Post.find().sort('-createdAt')
        res.send(posts)

    },
    async store(req, res ){
        const{ name, hastags}  =  req.body
        res.json( {
            name,
            hastags
        })
    }
}