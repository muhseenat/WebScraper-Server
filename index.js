require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const insightsRouter= require("./src/router/insights")
const db=require('./config/database')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:['*','http://localhost:3000','https://web-scraper-client.vercel.app']
}))
db.dbConnect(process.env.MONGO_URL)

//INSIGHTS ROUTER
app.use("/api/insights",insightsRouter)

app.listen(5050,()=>{
    console.log('server is running on port number 5050');
})