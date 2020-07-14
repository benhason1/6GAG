"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var Configuration_1 = require("./Configuration");
var MemoryDataBase_1 = require("./Dal/MemoryDataBase");
var posts_1 = require("./Routes/posts");
var files_1 = require("./Routes/files");
var MulterInitializer_1 = require("./MulterInitializer");
var postsRouter = new posts_1["default"](MemoryDataBase_1["default"], MulterInitializer_1["default"]);
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/posts", postsRouter.router);
app.use("/files", files_1["default"]);
app.listen(Configuration_1["default"].ExpressAppPort);
