import * as express from "express";

import * as bodyParser from 'body-parser';

import config from './Configuration'


import MemoryDB from './Dal/MemoryDataBase'
    
// const memoryDb = require('./Dal/MemoryDataBase')
import posts from './Routes/posts'

const postsRouter = new posts(MemoryDB)


const app = express()

app.use(bodyParser.json())

app.use("/posts",postsRouter.router)



app.listen(config.ExpressAppPort)