"use strict";
exports.__esModule = true;
var express = require("express");
var Configuration_1 = require("../../Configuration");
var PostsRouter = /** @class */ (function () {
    function PostsRouter(dataBaseWrapper) {
        this.dataBaseWrapper = dataBaseWrapper;
        this.router = express.Router();
        this._InitializeRouter();
    }
    PostsRouter.prototype._InitializeRouter = function () {
        var _this = this;
        this.router.route('/:id')
            .get(function (req, res) {
            var id = req.params.id;
            var DbResponse = _this.dataBaseWrapper.getByID(id);
            if (DbResponse === null)
                res.status(422);
            res.send(DbResponse);
        })
            .put(function (req, res) {
            res.send(_this.dataBaseWrapper.update(req.params.id, req.body));
        });
        this.router.route('/')
            .get(function (req, res) {
            res.send(_this.dataBaseWrapper.getTop(Configuration_1["default"].DefaultNumberOfPostsToSend));
        })
            .post(function (req, res) {
            res.send(_this.dataBaseWrapper.save(req.body));
        });
    };
    return PostsRouter;
}());
exports["default"] = PostsRouter;
