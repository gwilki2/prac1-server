const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const port = 4000


app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(port, ()=>console.log('listening on port: ', port))