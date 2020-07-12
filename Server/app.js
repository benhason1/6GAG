const config = require('./Configuration')
const express = require('express')
const posts = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

// app.use(cors({
//     origin: config.CorsAllowedIp
//   }));

app.use(bodyParser.json())

app.use("/posts",posts);

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(config.ExpressAppPort)