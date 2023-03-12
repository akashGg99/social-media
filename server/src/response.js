const respond500 = function(msg){
    res.status(500).send({status:false, message:msg})
}

const respond503 = function(msg){
    res.status(500).send({status:false, message:"failed"})
}

const respond201 = function(passdata){
    res.status(201).send({status:true, message:"Success", data: passdata})
}



module.exports={respond500, respond503, respond201};