var MemoryDataBase = /** @class */ (function () {
    function MemoryDataBase() {
    }
    MemoryDataBase.prototype.save = function (obj) {
        throw new Error("Method not implemented.");
    };
    MemoryDataBase.prototype.getAll = function (size) {
        throw new Error("Method not implemented.");
    };
    MemoryDataBase.prototype.get = function (query) {
        throw new Error("Method not implemented.");
    };
    MemoryDataBase.prototype.update = function (id) {
        throw new Error("Method not implemented.");
    };
    return MemoryDataBase;
}());
var DB = new MemoryDataBase();
module.exports = DB;
