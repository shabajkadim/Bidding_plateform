import express from 'express'
import AllRoutes from './Router/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config() 

app.get('/',((req,res)=>{
    res.send("home page..")
}))

app.use('/api/v1',AllRoutes)


mongoose.connect(process.env.DATABASE_URL).then(
    ()=>{console.log("database connected..");}
)

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))