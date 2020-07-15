const express = require('express')
const axios = require('axios')
const config = require('../../Configuration')
const FormData = require('form-data')
const request = require('request')

class PostsRouter {
    constructor(multerUpload) {
        this.multerUpload = multerUpload
        this.router = express.Router()
        this._InitializeRouter();
    }

    _InitializeRouter() {
        this.router.route('/:id')
            .get((req, res) => {
                res.send("returning the specified post")
            })
            .delete((req, res) => {
                res.send("deleting the specified post")
            })
            .put((req, res) => {

                if (!req.body['Action'])
                    return res.send("request need to include action")

                let action = req.body["Action"]

                if (action === 'like') {

                    let updatedData = {}
                    axios.get(`${config.DBIp}/posts/${req.params.id}`)
                        .then((dbRes) => {
                            let dbResData = dbRes.data;
                            if (!dbResData["PeopleLiked"]) {
                                updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': [req.ip] }

                            }

                            else if (dbResData["PeopleLiked"].includes(req.ip)) {
                                updatedData = { 'likes': Number(dbResData['likes']) - 1, 'PeopleLiked': dbResData['PeopleLiked'].filter(item => item !== req.ip) }
                            }

                            else {
                                dbResData['PeopleLiked'].push(req.ip);
                                updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': dbResData['PeopleLiked'] }
                            }

                            axios.put(`${config.DBIp}/posts/${req.params.id}`, updatedData)
                                .then((updateDbRes) => res.send(updateDbRes))
                                .catch((updateDbErr) => res.send(updateDbErr))
                        })
                }

            })


        this.router.route('/')
            .get((req, res) => {
                axios.get(`${config.DBIp}/posts`, req)
                    .then((dbRes) => {
                        dbRes.data.forEach(element => {
                            if (!element["PeopleLiked"])
                                element['isLiked'] = false
                            else if (element["PeopleLiked"].includes(req.ip)) 
                                element['isLiked'] = true
                            else
                                element['isLiked'] = false

                            });

                        res.send({ "items": dbRes.data })

                    })

                    .catch((err) => {
                        res.status(err.response.status)
                        res.send(err)
                    })
            })

            .post(this.multerUpload.single('postImage'), (req, res) => {

                const form = this._reqToFormData(req)

                axios.post(`${config.DBIp}/posts`, form, {
                    headers: form.getHeaders()
                })
                    .then((dbRes) => {
                        res.send(dbRes.data)
                    }
                    )
                    .catch((err) => {
                        res.status(err.response.status)
                        res.send(err.message)
                    })
            })
    }

    _reqToFormData(req) {
        const form = new FormData();
        const { file } = req;
        const { buffer, originalname: filename } = file;

        for (let key of Object.keys(req.body)) {
            form.append(key, req.body[key])
        }

        form.append('postImage', buffer, { filename })
        return form
    }
}

module.exports = PostsRouter