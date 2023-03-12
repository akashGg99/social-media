const express = require("express");
const router = express.Router()
const {createUser} = require("../controllers/userController")
const {createPost} = require("../controllers/postController")
const {createComment} = require("../controllers/commentController")



// console.log("Routes")
//user apis
router.post("/createUser", createUser);

//post apis
router.post("/createPost", createPost);

//comment apis
router.post("createComment", createComment)



module.exports = router;