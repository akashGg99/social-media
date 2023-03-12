const commentModel = require("../models/commentModel");
const { respond500, respond503 } = require("../response")

const createComment = async function (req, res) {
    try {
        const [postId, userId, comment] = req.body;

        const createdComment = await commentModel.create(req.body)

        if (!createdComment) respond503();
        res.status(201).send({ status: true, message: "Success", data: createdComment })
    }
    catch (err) {
        respond500(err.message)
    }
}



module.exports.createComment = createComment;