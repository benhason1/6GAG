import * as express from "express";

import * as bodyParser from 'body-parser';

import * as multer from 'multer' 

import config from './Configuration'


import MemoryDB from './Dal/MemoryDataBase'
    
// const memoryDb = require('./Dal/MemoryDataBase')
import posts from './Routes/posts'

import filesRouter from './Routes/files'


//multer initialize
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      console.log(file);
      let filePath = Date.now() + '_' + file.originalname
      cb(null, filePath);
    }
  });
  const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  
  
  const upload = multer({
    limits: { fileSize: 1024 * 1024 * 5 },
    storage: storage,
    fileFilter: fileFilter
  });

  
const postsRouter = new posts(MemoryDB, upload)
  


const app = express()

app.use(bodyParser.json())

app.use("/posts",postsRouter.router)
app.use("/files",filesRouter)


app.listen(config.ExpressAppPort)