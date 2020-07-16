"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var _ = require("lodash");
var MemoryDataBase = /** @class */ (function () {
    function MemoryDataBase() {
        this.memory = {};
    }
    MemoryDataBase.prototype.save = function (category, obj) {
        if (!this.memory[category]) {
            this.memory[category] = [];
        }
        obj["id"] = uuid.v4();
        this.memory[category].push(obj);
        return obj;
    };
    MemoryDataBase.prototype.getTop = function (category, size) {
        if (!this.memory[category])
            return [];
        return this.memory[category].slice(0, size);
    };
    MemoryDataBase.prototype.getByID = function (category, id) {
        if (!this.memory[category])
            return null;
        var res = _.find(this.memory[category], { "id": id });
        if (res == undefined)
            return null;
        return res;
    };
    MemoryDataBase.prototype.getByQuery = function (category, matchItems) {
        if (!this.memory[category])
            return [];
        return _.filter(this.memory[category], matchItems);
    };
    MemoryDataBase.prototype.update = function (category, id, updatedItems) {
        if (!this.memory[category])
            return null;
        var index = _.findIndex(this.memory[category], { "id": id });
        if (index == -1)
            return null;
        for (var _i = 0, _a = Object.keys(updatedItems); _i < _a.length; _i++) {
            var key = _a[_i];
            this.memory[category][index][key] = updatedItems[key];
        }
        return this.memory[category][index];
    };
    return MemoryDataBase;
}());
var MemoryDB = new MemoryDataBase();
exports["default"] = MemoryDB;
