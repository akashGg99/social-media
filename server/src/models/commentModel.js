const { default: mongoose } = require("mongoose");
const objectId= mongoose.Schema.Types.ObjectId

const commentSchema = mongoose.Schema({
    postId:{type:objectId, required: true},
    commentor_userId:{type:objectId, required: true},
    commentContent:{type:String},
    replies:[{
        userId:{type:objectId},
        reply:{type:String, isDeleted:{type:Boolean, default:false}}
        }],

    isDeleted:{type:Boolean, default:false}
})


module.exports = mongoose.model("comment",commentSchema);
