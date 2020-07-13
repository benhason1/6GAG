"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var Configuration_1 = require("./Configuration");
var MemoryDataBase_1 = require("./Dal/MemoryDataBase");
// const memoryDb = require('./Dal/MemoryDataBase')
var posts_1 = require("./Routes/posts");
var postsRouter = new posts_1["default"](MemoryDataBase_1["default"]);
var app = express();
app.use(bodyParser.json());
app.use("/posts", postsRouter.router);
app.listen(Configuration_1["default"].ExpressAppPort);
