var routerExpress = require('express');
var configuration = require('../../Configuration');
var PostsRouter = /** @class */ (function () {
    function PostsRouter(dataBaseWrapper) {
        this.dataBaseWrapper = dataBaseWrapper;
        this.router = routerExpress.Router();
        this._InitializeRouter();
    }
    PostsRouter.prototype._InitializeRouter = function () {
        var _this = this;
        this.router.route('/:id')
            .get(function (req, res) {
            var id = req.params.id;
            var DbResponse = _this.dataBaseWrapper.getByID(id);
            if (DbResponse === null)
                res.send("id not found");
            else {
                res.send(DbResponse);
            }
        });
        this.router.route('/')
            .get(function (req, res) {
            var DbResponse = _this.dataBaseWrapper.getTop(configuration.DefaultNumberOfPostsToSend);
            if (DbResponse === null)
                res.send("no posts in db");
            else {
                res.send(DbResponse);
            }
        });
    };
    return PostsRouter;
}());
module.exports = PostsRouter;
