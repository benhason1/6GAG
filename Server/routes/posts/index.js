const express = require('express')
const axios = require('axios')
const config = require('../../Configuration')
const FormData = require('form-data')


class PostsRouter{
    constructor(multerUpload){
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
            res.send("updating post according to action in body working")
        })
    
    
    this.router.route('/')
        .get((req, res) => {
            axios.get(`${config.DBIp}/posts`, req)
                .then((dbRes) => res.send({"items":dbRes.data}))
                .catch((err)=>{
                    res.status(err.response.status)
                    res.send(err)
                })
        })
    
        .post(this.multerUpload.single('postImage'), (req, res) => {
    
            const form = new FormData();
            const { file } = req;
            const { buffer, originalname: filename } = file;
    
            form.append('postImage', buffer, { filename })
    
            axios.post(`${config.DBIp}/posts`, form, {
                headers: form.getHeaders()
            })
                .then((dbRes) => {
                    console.log(dbRes)
                    res.send(dbRes.data)
                }
                )
                .catch((err) => {
                    res.status(err.response.status)
                    res.send(err)
                })
        })
    }
}

module.exports = PostsRouter