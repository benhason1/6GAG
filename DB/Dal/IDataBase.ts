interface IDataBase{
    save(category:string, obj: Object): Object,
    getTop(size:number):Object[],
    getByID(id:string):object,
    getByQuery(matchItems: Object):Object[],
    update(id:string, updatedItems:Object):Object
}