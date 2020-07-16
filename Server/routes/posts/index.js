const express = require('express')
const axios = require('axios')
const config = require('../../Configuration')
const FormData = require('form-data')
const request = require('request')
const verifyToken = require('../../Auth').verifyToken



class PostsRouter {
    constructor(multerUpload, nameToAction) {
        this.nameToAction = nameToAction
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
            .put(verifyToken, (req, res) => {

                if (!req.body['Action'])
                    return res.send("request need to include action")

                let action = req.body["Action"]

                if (!this.nameToAction[action])
                    return res.send("action doesnt exist")

                else {
                    return this.nameToAction[action](req, res)
                }

            })


        this.router.route('/')
            .get((req, res) => {
                axios.get(`${config.DBIp}/posts`, req)
                    .then((dbRes) => {

                        dbRes.data.forEach(post => {

                            if (!post["PeopleLiked"])
                                post['isLiked'] = false
                            else if (post["PeopleLiked"].includes(req.ip))
                                post['isLiked'] = true
                            else
                                post['isLiked'] = false

                        });

                        res.send({ "items": dbRes.data })

                    })

                    .catch((err) => {
                        res.status(err.response.status)
                        res.send(err)
                    })
            })

            .post(this.multerUpload.single('postImage'), verifyToken, (req, res) => {

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