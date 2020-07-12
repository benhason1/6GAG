const routerExpress = require('express')

class PostsRouter {
    dataBaseWrapper: IDataBase
    router: any;
    constructor(dataBaseWrapper: IDataBase) {
        this.dataBaseWrapper = dataBaseWrapper
        this.router = routerExpress.Router();
        this._InitializeRouter();
    }

    _InitializeRouter() {
        this.router.route('/:id')
            .get((req, res) => {
                let id = req.params.id
                let DbResponse = this.dataBaseWrapper.get(id)
                if (DbResponse === null)
                    res.send("id not found")
                else {
                    res.send(DbResponse)
                }
            })
        
        this.router.route('/')
            .get((req, res) => {
                let DbResponse = this.dataBaseWrapper.getAll(50)
                if (DbResponse === null)
                    res.send("no posts in db")
                else {
                    res.send(DbResponse)
                }
            })
    }

}


module.exports = PostsRouter