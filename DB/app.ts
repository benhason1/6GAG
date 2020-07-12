const express = require('express')
const bodyParser = require('body-parser')
const config = require('./Configuration')

const memoryDb = require('./Dal/MemoryDataBase')

const posts = require('./Routes/posts')
const postsRouter = new posts(memoryDb)


const app = express()

app.use(bodyParser.json())

app.use("/posts",postsRouter.router)



app.listen(config.ExpressAppPort)