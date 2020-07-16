const express = require('express'),
      config = require('../../Configuration'),
      axios = require('axios'),
      request = require('request'),
      router = express.Router(),
      verifyToken = require('../../Auth').verifyToken


router.route('/')
.get((req,res)=>{
    request(`${config.DBIp}${req.originalUrl}`).pipe(res)

})

module.exports = router;