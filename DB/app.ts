import * as express from "express";
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import config from './Configuration'
import MemoryDB from './Dal/MemoryDataBase'
import posts from './Routes/posts'
import filesRouter from './Routes/files'
import upload from './MulterInitializer'
import usersRouter from './Routes/users'


const postsRouter = new posts(MemoryDB, upload)

const app = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/posts", postsRouter.router)
app.use("/files", filesRouter)
app.use("/users",usersRouter)

app.listen(config.ExpressAppPort)