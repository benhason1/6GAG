import * as express from "express";
import config from "../../Configuration"

class UsersRouter {
    dataBaseWrapper: IDataBase
    router: any;
    multerUpload: any;
    constructor(dataBaseWrapper: IDataBase, multerUpload) {
        this.dataBaseWrapper = dataBaseWrapper
        this.router = express.Router();
        this.multerUpload = multerUpload;
        this._InitializeRouter();
    }

    _InitializeRouter() {
        this.router.route('/:id')
            .get((req, res) => {
                let id = req.params.id
                let DbResponse = this.dataBaseWrapper.getByID(id)
                if (DbResponse === null)
                    res.status(422)

                res.send(DbResponse)
            })
            .put((req, res) => {
                res.send(this.dataBaseWrapper.update(req.params.id, req.body))
            })


        this.router.route('/')
            .get((req, res) => {
                res.send(this.dataBaseWrapper.getTop(config.DefaultNumberOfPostsToSend))
            })
            .post(this.multerUpload.single('postImage'),(req, res) => {                
                if(!req.file){
                    res.status(500)
                    return res.send("didnt sent file")
                }
                res.send(this.dataBaseWrapper.save({...req.body,"postImage":req.file.path}));
            })
    }
}

export default UsersRouter;
