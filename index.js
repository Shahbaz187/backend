import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/passroutes.js'

dotenv.config()
await mongoose.connect(process.env.MONGOURL)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

app.use('/api' , routes )

app.get('/' , (req , res) =>{
    res.json({message: "Hello world"})
})

app.listen(port , () =>{
    console.log(`your server is runing on ${port}`);
})