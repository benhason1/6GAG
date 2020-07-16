const config = require('./Configuration')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const upload = require('./MulterInitializer')
const app = express()

const posts = require('./routes/posts')
const filesRouter = require('./routes/files')
const usersRouter = require('./routes/users')

const likeAction = require('./routes/posts/actions/like')
const commentAction = require('./routes/posts/actions/comment')

nameToAction = {'like':likeAction,'comment':commentAction}

const postsRouter = new posts(upload,nameToAction)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/posts",postsRouter.router);
app.use("/files",filesRouter)
app.use("/users",usersRouter)


app.listen(config.ExpressAppPort)