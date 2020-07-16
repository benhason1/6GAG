interface IDataBase {
    save(category: string, obj: Object): Object,
    getTop(category: string, size: number): Object[],
    getByID(category: string, id: string): object,
    getByQuery(category: string, matchItems: Object): Object[],
    update(category: string, id: string, updatedItems: Object): Object
}