"use strict";
exports.__esModule = true;
var multer = require("multer");
var fs = require('fs');
var Configuration_1 = require("../Configuration");
if (!fs.existsSync(Configuration_1["default"].filesPath)) {
    fs.mkdirSync(Configuration_1["default"].filesPath);
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, Configuration_1["default"].filesPath);
    },
    filename: function (req, file, cb) {
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
exports["default"] = upload;
