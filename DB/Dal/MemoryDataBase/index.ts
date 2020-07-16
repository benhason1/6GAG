import * as uuid from 'uuid'
import * as _ from 'lodash'

class MemoryDataBase implements IDataBase {
    memory: {}
    constructor() {
        this.memory = {}
    }

    save(category:string, obj: Object) {
        if(!this.memory[category]){
            this.memory[category] = []    
        }
        obj["id"] = uuid.v4()
        this.memory[category].push(obj)
        return obj;
    }

    getTop(category:string,size: number): Object[] {
        if(!this.memory[category])
            return []

        return this.memory[category].slice(0, size)
    }

    getByID(category:string, id: string): object {
        if(!this.memory[category])
            return null

        let res = _.find(this.memory[category], { "id": id })

        if (res == undefined)
            return null;

        return res;
    }

    getByQuery(category:string, matchItems: Object): Object[] {
        if(!this.memory[category])
            return []

        return _.filter(this.memory[category], matchItems)
    }

    update(category:string ,id: string, updatedItems:Object): Object {
        if(!this.memory[category])
            return null

        let index = _.findIndex(this.memory[category], { "id": id })
        if (index == -1)
            return null
        
        for(let key of Object.keys(updatedItems)){
            this.memory[category][index][key] = updatedItems[key]
        }

        return this.memory[category][index]
        
    }


}

const MemoryDB = new MemoryDataBase();

export default MemoryDB;


