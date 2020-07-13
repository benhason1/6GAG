import * as express from "express";
import config from "../../Configuration"

class PostsRouter {
    dataBaseWrapper: IDataBase
    router: any;
    constructor(dataBaseWrapper: IDataBase) {
        this.dataBaseWrapper = dataBaseWrapper
        this.router = express.Router();
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
                res.send(this.dataBaseWrapper.getTop(config.DefaultNumberOfPostsToSend))
            })
    }

}

export default PostsRouter;