const express = require("express")
const app = express()
const cors = require('cors')
const postRouter= require("./src/router/post")
const db=require('./config/database')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
db.dbConnect(process.env.MONGO_URL)
app.use("/posts",postRouter)

app.listen(5050,()=>{
    console.log('server is running on port number 5050');
})