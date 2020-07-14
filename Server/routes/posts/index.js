const express = require('express')
let router = express.Router()
const axios = require('axios')
const config = require('../../Configuration')


router.route('/:id')
    .get((req, res) => {
        res.send("returning the specified post")
    })
    .delete((req, res) => {
        res.send("deleting the specified post")
    })
    .put((req, res) => {
        res.send("updating post according to action in body working")
    })

router.route('/')
    .get((req, res) => {
        axios.get(`${config.DBIp}/posts`, req)
            .then((dbRes) => res.send(dbRes))
    })
    .post((req, res) => {
        axios.post(`${config.DBIp}/posts`, req)
            .then((dbRes) => res.send(dbRes))
    })


module.exports = router