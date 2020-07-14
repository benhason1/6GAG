const config = require('./Configuration')
const express = require('express')
const posts = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')
const upload = require('./MulterInitializer')

const app = express()

const postsRouter = new posts(upload)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/posts",postsRouter.router);

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(config.ExpressAppPort)