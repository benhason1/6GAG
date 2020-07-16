const express = require('express'),
    config = require('../../Configuration'),
    request = require('request'),
    router = express.Router()


router.route('/')
    .get((req, res) => {
        request(`${config.DBIp}${req.originalUrl}`).pipe(res)

    })

module.exports = router;