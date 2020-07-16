import * as express from "express";
import config from "../../Configuration"

class UsersRouter {
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
                let DbResponse = this.dataBaseWrapper.getByID("users",id)
                if (DbResponse === null)
                    res.status(422)

                res.send({"user":DbResponse})
            })
            .put((req, res) => {
                res.send(this.dataBaseWrapper.update('users', req.params.id, req.body))
            })


            this.router.route('/')
                .get((req, res) => {
                res.send(this.dataBaseWrapper.getTop("users", config.DefaultNumberOfPostsToSend))
            })
            .post((req, res) => {
                res.status(200)
                res.send({"user":this.dataBaseWrapper.save("users", req.body )})
            })

        this.router.route('/search')
            .post((req, res) => {
                res.send({"user":this.dataBaseWrapper.getByQuery("users", req.body )})
            })
    }
}

export default UsersRouter;
