"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express = require("express");
var Configuration_1 = require("../../Configuration");
var PostsRouter = /** @class */ (function () {
    function PostsRouter(dataBaseWrapper, multerUpload) {
        this.dataBaseWrapper = dataBaseWrapper;
        this.router = express.Router();
        this.multerUpload = multerUpload;
        this._InitializeRouter();
    }
    PostsRouter.prototype._InitializeRouter = function () {
        var _this = this;
        this.router.route('/:id')
            .get(function (req, res) {
            var id = req.params.id;
            var DbResponse = _this.dataBaseWrapper.getByID("posts", id);
            if (DbResponse === null)
                res.status(422);
            res.send(DbResponse);
        })
            .put(function (req, res) {
            res.send(_this.dataBaseWrapper.update("posts", req.params.id, req.body));
        });
        this.router.route('/')
            .get(function (req, res) {
            res.send(_this.dataBaseWrapper.getTop("posts", Configuration_1["default"].DefaultNumberOfPostsToSend));
        })
            .post(this.multerUpload.single('postImage'), function (req, res) {
            if (!req.file) {
                res.status(500);
                return res.send("didnt sent file");
            }
            res.send(_this.dataBaseWrapper.save("posts", __assign(__assign({}, req.body), { "postImage": req.file.path })));
        });
    };
    return PostsRouter;
}());
exports["default"] = PostsRouter;
