interface IDataBase{
    save(obj: Object): Object,
    getTop(size:number):Object[],
    getByID(id:string):object,
    getByQuery(matchItems: Object):Object[],
    update(id:string, updatedItems:Object):Object
}