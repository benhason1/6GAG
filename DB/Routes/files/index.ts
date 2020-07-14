import * as express from "express";
import config from "../../Configuration"

const router = express.Router();


router.route('/')
.get((req,res)=>{
    res.sendFile(req.query.path)
})

export default router;