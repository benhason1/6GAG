"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var lodash_1 = require("lodash");
var MemoryDataBase = /** @class */ (function () {
    function MemoryDataBase() {
        this.memory = [];
    }
    MemoryDataBase.prototype.save = function (obj) {
        obj["id"] = uuid_1["default"].v4();
        this.memory.push(obj);
    };
    MemoryDataBase.prototype.getTop = function (size) {
        return this.memory.slice(0, size);
    };
    MemoryDataBase.prototype.getByID = function (id) {
        var res = lodash_1["default"].find(this.memory, { "id": id });
        if (res == undefined)
            return null;
        return res;
    };
    MemoryDataBase.prototype.getByQuery = function (matchItems) {
        return lodash_1["default"].filter(this.memory, matchItems);
    };
    MemoryDataBase.prototype.update = function (id, updatedItems) {
        var index = lodash_1["default"].findIndex(this.memory, { "id": id });
        if (index == -1)
            return null;
        for (var _i = 0, _a = Object.keys(updatedItems); _i < _a.length; _i++) {
            var key = _a[_i];
            this.memory[index][key] = updatedItems[key];
        }
        return this.memory[index];
    };
    return MemoryDataBase;
}());
var MemoryDB = new MemoryDataBase();
exports["default"] = MemoryDB;
