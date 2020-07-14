import * as express from "express";
import * as bodyParser from 'body-parser';
import config from './Configuration'
import MemoryDB from './Dal/MemoryDataBase'
import posts from './Routes/posts'
import filesRouter from './Routes/files'
import upload from './MulterInitializer'

const postsRouter = new posts(MemoryDB, upload)

const app = express()

app.use(bodyParser.json())

app.use("/posts", postsRouter.router)
app.use("/files", filesRouter)


app.listen(config.ExpressAppPort)