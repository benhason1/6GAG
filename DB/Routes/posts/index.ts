const routerExpress = require('express')
const configuration = require('../../Configuration')

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
                let DbResponse = this.dataBaseWrapper.getByID(id)
                if (DbResponse === null)
                    res.send("id not found")
                else {
                    res.send(DbResponse)
                }
            })
        
        this.router.route('/')
            .get((req, res) => {
                let DbResponse = this.dataBaseWrapper.getTop(configuration.DefaultNumberOfPostsToSend)
                if (DbResponse === null)
                    res.send("no posts in db")
                else {
                    res.send(DbResponse)
                }
            })
    }

}


module.exports = PostsRouter