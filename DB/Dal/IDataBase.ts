interface IDataBase{
    save(obj: Object),
    getTop(size:number):Object[],
    getByID(id:string):object,
    getByQuery(matchItems: Object):Object[],
    update(id:string, updatedItems:Object):Object
}