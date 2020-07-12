class MemoryDataBase implements IDataBase{
    save(obj: Object) {
        throw new Error("Method not implemented.");
    }    getAll(size: Number): Object[] {
        throw new Error("Method not implemented.");
    }
    get(query: String): object {
        throw new Error("Method not implemented.");
    }
    update(id: String): Object {
        throw new Error("Method not implemented.");
    }


}

const DB = new MemoryDataBase();

module.exports = DB