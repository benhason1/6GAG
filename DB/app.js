"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var Configuration_1 = require("./Configuration");
var MemoryDataBase_1 = require("./Dal/MemoryDataBase");
// const memoryDb = require('./Dal/MemoryDataBase')
var posts_1 = require("./Routes/posts");
var files_1 = require("./Routes/files");
//multer initialize
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        console.log(file);
        var filePath = Date.now() + '_' + file.originalname;
        cb(null, filePath);
    }
});
var fileFilter = function (req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
var upload = multer({
    limits: { fileSize: 1024 * 1024 * 5 },
    storage: storage,
    fileFilter: fileFilter
});
var postsRouter = new posts_1["default"](MemoryDataBase_1["default"], upload);
var app = express();
app.use(bodyParser.json());
app.use("/posts", postsRouter.router);
app.use("/files", files_1["default"]);
app.listen(Configuration_1["default"].ExpressAppPort);
