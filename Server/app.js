const config = require('./Configuration')
const express = require('express')
const posts = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')
const upload = require('./MulterInitializer')
const likeAction = require('./actions/like')
const app = express()


const filesRouter = require('./routes/files')

nameToAction = {'like':likeAction}

const postsRouter = new posts(upload,nameToAction)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/posts",postsRouter.router);
app.use("/files",filesRouter)



app.listen(config.ExpressAppPort)