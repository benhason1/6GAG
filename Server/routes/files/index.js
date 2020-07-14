const express = require('express')
const config = require('../../Configuration')
const axios = require('axios')
const request = require('request')
const router = express.Router();


router.route('/')
.get((req,res)=>{
    request(`${config.DBIp}${req.originalUrl}`).pipe(res)

    // axios.get(`${config.DBIp}/files/?path=${req.query.path}`)
    // .then((dbRes)=>{
        

    // })
    // .catch((err)=>{
    //     res.status(err.response.status)
    //     res.send(err.message)
    // })
})

module.exports = router;