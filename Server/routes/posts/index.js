const
    express = require('express'),
    verifyToken = require('../../Auth').verifyToken,
    postsCtrl = require('./PostsController')

class PostsRouter {
    constructor(multerUpload) {
        this.multerUpload = multerUpload
        this.router = express.Router()
        this._InitializeRouter();
    }

    _InitializeRouter() {

        this.router.route('/:id')
            .put(verifyToken,postsCtrl.update)

        this.router.route('/')
            .get(verifyToken,postsCtrl.index)
            .post(this.multerUpload.single('postImage'),verifyToken,postsCtrl.create)
    }


}

module.exports = PostsRouter