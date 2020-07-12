const uuid = require('uuid')

interface IDataBase{
    save(obj: Object),
    getAll(size:Number):Object[],
    get(query:String):object,
    update(id:String):Object
}