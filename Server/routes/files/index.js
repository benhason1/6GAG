const express = require('express')
const config = require('../../Configuration')
const axios = require('axios')

const router = express.Router();


router.route('/')
.get((req,res)=>{
    axios.get(`${config.DBIp}/files/?path=${req.query.path}`)
    .then((dbRes)=>{
        res.set('Content-Type', dbRes.headers["content-type"])
        res.send(dbRes.data)
        // res.writeHead(200, {'Content-Type': dbRes.headers["content-type"]});
        // res.end(dbRes.data)

    })
    .catch((err)=>{
        res.status(err.response.status)
        res.send(err.message)
    })
})

module.exports = router;