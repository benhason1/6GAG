const 
      config = require('./Configuration'),
      express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      upload = require('./MulterInitializer'),
      app = express(),
      posts = require('./routes/posts'),
      filesRouter = require('./routes/files'),
      usersRouter = require('./routes/users')


const postsRouter = new posts(upload)

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