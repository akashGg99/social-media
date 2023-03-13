const commentModel = require("../models/commentModel");
const { respond500, respond503 } = require("../response")

const createComment = async function (req,res) {
    try {
        // const [postId, userId, comment] = req.body;

        const createdComment = await commentModel.create(req.body)

        if (!createdComment) res.status(500).send({status:false, message:"failed"});
        res.status(201).send({ status: true, message: "Success", data: createdComment })
    }
    catch (err) {
        res.status(500).send({status:false, message:msg})
    }
}



module.exports.createComment = createComment;