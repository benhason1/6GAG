"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
router.route('/')
    .get(function (req, res) {
    res.sendfile(req.query.path);
});
exports["default"] = router;
