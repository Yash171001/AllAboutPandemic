import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Dotenv from 'dotenv'
//components
import connection from './database/db.js'
import Router from './routes/route.js'


const app = express()
Dotenv.config();
const router = express.Router();
//console.log("hello")
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)




app.listen(PORT, () => {
    console.log("server is running on " + PORT)
})



connection();