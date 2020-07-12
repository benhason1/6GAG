const routerExpress = require('express')

class PostsRouter {
    dataBaseWrapper: IDataBase
    router: any;
    constructor(dataBaseWrapper: IDataBase) {
        this.dataBaseWrapper = dataBaseWrapper
        this.router = routerExpress.Router();
        this.__InitializeRouter();
    }
    
    __InitializeRouter(){
        
    }

    
}

module.exports = PostsRouter