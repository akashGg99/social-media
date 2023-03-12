const userModel = require("../models/userModel");



const createUser = async function (req, res) {
    try {
        // const[name, email, password]=req.body;

        let createdUser = await userModel.create(req.body)
        // console.log(createdUser)

        if(!createdUser) res.status(400).send({status:false, message:"request failed."})

        res.status(201).send({ status: true, message: "user created sucessfully.", data: createdUser })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}


module.exports.createUser = createUser;