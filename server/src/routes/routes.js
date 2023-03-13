const express = require("express");
const router = express.Router()
const {createUser} = require("../controllers/userController")
const {createPost, getPost} = require("../controllers/postController")
const {createComment} = require("../controllers/commentController")



// console.log("Routes")
//user apis
router.post("/createUser", createUser);

//post apis
router.post("/createPost", createPost);
router.get("/getPost", getPost);

//comment apis
router.post("/createComment", createComment)







//for execption
router.all("/*",
(req,res)=> res.status(400).send({message:"please check the requested path"}))


module.exports = router;