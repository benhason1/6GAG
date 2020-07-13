import * as uuid from 'uuid'
import * as _ from 'lodash'

class MemoryDataBase implements IDataBase {
    memory: object[];
    constructor() {
        this.memory = []
    }

    save(obj: Object) {
        obj["id"] = uuid.v4()
        this.memory.push(obj)
    }

    getTop(size: number): Object[] {
        return this.memory.slice(0, size)
    }

    getByID(id: string): object {
        let res = _.find(this.memory, { "id": id })

        if (res == undefined)
            return null;

        return res;
    }

    getByQuery(matchItems: Object): Object[] {
        return _.filter(this.memory, matchItems)
    }

    update(id: string, updatedItems:Object): Object {
        let index = _.findIndex(this.memory, { "id": id })
        if (index == -1)
            return null
        
        for(let key of Object.keys(updatedItems)){
            this.memory[index][key] = updatedItems[key]
        }

        return this.memory[index]
        
    }


}

const MemoryDB = new MemoryDataBase();

export default MemoryDB;


