const postModel = require("../models/postModel");



const createPost = function (req, res) {
    try {
        const [userId, postContent] = req.body;

        let createdPost = postModel.create(req.body)

        if (!createdPost) res.status(400).send({ status: false, message: "request failed." })

        res.status(201).send({ status: true, message: "post created sucessfully.", data: createdPost })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}




module.exports.createPost = createPost;