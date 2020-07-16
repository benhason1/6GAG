const express = require('express')
const config = require('../../Configuration')
const axios = require('axios')
const request = require('request')
const router = express.Router();
const verifyToken = require('../../Auth').verifyToken


usersRouter.use(verifyToken)
router.route('/')
.get((req,res)=>{
    request(`${config.DBIp}${req.originalUrl}`).pipe(res)

})

module.exports = router;