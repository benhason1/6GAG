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
                res.send("returing from db /:id")
            })

            this.router.route('/')
            .get((req, res) => {
                res.send("returing from db /")
            })
    }

}


module.exports = PostsRouter