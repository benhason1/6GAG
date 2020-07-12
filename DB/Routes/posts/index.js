var routerExpress = require('express');
var PostsRouter = /** @class */ (function () {
    function PostsRouter(dataBaseWrapper) {
        this.dataBaseWrapper = dataBaseWrapper;
        this.router = routerExpress.Router();
        this._InitializeRouter();
    }
    PostsRouter.prototype._InitializeRouter = function () {
        this.router.route('/:id')
            .get(function (req, res) {
            res.send("returing from db /:id");
        });
        this.router.route('/')
            .get(function (req, res) {
            res.send("returing from db /");
        });
    };
    return PostsRouter;
}());
module.exports = PostsRouter;
