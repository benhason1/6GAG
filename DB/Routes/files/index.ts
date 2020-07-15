import * as express from "express";
import config from "../../Configuration"

const router = express.Router();


router.route('/')
.get((req,res)=>{
    res.sendfile(req.query.path)
})

export default router;