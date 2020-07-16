const 
      config = require('./Configuration'),
      express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      upload = require('./MulterInitializer'),
      app = express(),
      posts = require('./routes/posts'),
      filesRouter = require('./routes/files'),
      usersRouter = require('./routes/users'),
      likeAction = require('./routes/posts/actions/like'),
      commentAction = require('./routes/posts/actions/comment'),

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