const { default: mongoose } = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const postSchema = mongoose.Schema({

    userId:{type:objectId, required:true},
    postContent:{type:String, required:true},
    comments:[{type:objectId, ref:"comment"}],

    isDeleted:{type:Boolean,default:false}
})


module.exports = mongoose.model("post",postSchema);
