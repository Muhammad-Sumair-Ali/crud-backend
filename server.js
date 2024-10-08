const express = require('express')
const dbCoonection = require('./config/database')
const app = express()   
const cors= require('cors')
require('dotenv').config()
const router = require('./routes/CRUD')

const PORT = process.env.PORT;
dbCoonection();
app.use(cors())         
app.use(express.json())
app.use("/api" ,router)

app.listen(PORT, () =>{ 
    console.log(`Server is running on port ${PORT}`)
})
 