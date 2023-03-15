const postModel = require("../models/postModel");

//create post handler
const createPost = async function (req, res) {
    try {
        // const {userId, postContent} = req.body;

        let createdPost = await postModel.create(req.body)

        if (!createdPost) res.status(400).send({ status: false, message: "request failed." })

        res.status(201).send({ status: true, message: "post created sucessfully.", data: createdPost })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


//get posts handler
const getPost = async function (req, res) {
    try {
        const {postId}= req.body;

        let fetchedPost = await postModel.findById(postId)

        // fetchedPost.populated("comment")

        if (!fetchedPost) res.status(400).send({ status: false, message: "request failed." })

        res.status(200).send({ status: true, message: "Success", data: fetchedPost })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = {createPost,getPost};