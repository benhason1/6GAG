const uuid = require('uuid')

interface IDataBase{
    save(obj: Object),
    getAll(size:Number):Object[],
    get(id:String):object,
    update(id:String):Object
}