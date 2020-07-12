const express = require('express')
let router = express.Router()

router.route('/:id')
.get((req,res)=>{
    res.send("returning the specified post")
})
.delete((req,res)=>{
    res.send("deleting the specified post")
})
.put((req,res)=>{
    res.send("updating post according to action in body working")
})

router.route('/')
.get((req,res)=>{
    res.send("sending all top posts")
})
.post((req,res)=>{
    res.send("adding post to db")
})


module.exports = router