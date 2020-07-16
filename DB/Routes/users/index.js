"use strict";
exports.__esModule = true;
var express = require("express");
var Configuration_1 = require("../../Configuration");
var UsersRouter = /** @class */ (function () {
    function UsersRouter(dataBaseWrapper) {
        this.dataBaseWrapper = dataBaseWrapper;
        this.router = express.Router();
        this._InitializeRouter();
    }
    UsersRouter.prototype._InitializeRouter = function () {
        var _this = this;
        this.router.route('/:id')
            .get(function (req, res) {
        })
            .put(function (req, res) {
            res.send(_this.dataBaseWrapper.update('users', req.params.id, req.body));
        });
        this.router.route('/')
            .get(function (req, res) {
            res.send(_this.dataBaseWrapper.getTop("users", Configuration_1["default"].DefaultNumberOfPostsToSend));
        })
            .post(function (req, res) {
            res.status(200);
            res.send({ "user": _this.dataBaseWrapper.save("users", req.body) });
        });
        this.router.route('/search')
            .post(function (req, res) {
            res.send({ "user": _this.dataBaseWrapper.getByQuery("users", req.body) });
        });
    };
    return UsersRouter;
}());
exports["default"] = UsersRouter;
