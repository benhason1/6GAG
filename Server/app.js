const config = require('./Configuration')
const express = require('express')
const posts = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')
const upload = require('./MulterInitializer')

const app = express()


const filesRouter = require('./routes/files')
const postsRouter = new posts(upload)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/posts",postsRouter.router);
app.use("/files",filesRouter)



app.listen(config.ExpressAppPort)