import * as multer from 'multer'
const fs = require('fs')
import config from '../Configuration'

if(!fs.existsSync(config.filesPath)){
    fs.mkdirSync(config.filesPath)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.filesPath);
    },
    filename: (req, file, cb) => {
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




export default upload;