const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
// const http = require('http')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error_middleware')

const app = express()

const PORT = process.env.PORT || 5151

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api', router)
app.use(errorMiddleware)

// const server = http.createServer(app)

async function Start() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true
    })
    console.clear()
    app.listen(PORT, () => {
      console.log('server is running..')
    })
  } catch (e) {
    console.error(new Error(e))
  }
}

Start()