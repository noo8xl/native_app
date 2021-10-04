import * as express from 'express'
import * as dotenv from 'dotenv'
import http from 'http'
import * as cors from 'cors'
import JWT from 'jsonwebtoken'
import MONGO_DB from './config/mongoDB'
import session from 'express-session'
import SESSION_OPTIONS from './config/session_options'
import CORS_OPTIONS from './config/cors_config'
dotenv.config()
const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(CORS_OPTIONS))
app.use(session(SESSION_OPTIONS))
app.disable('x-powered-by')

function FreePort(port: number): any {
  console.log(port, ' was used.')
  const clear = process.kill(port)
  return clear
}

async function Start() {
  try {
    await MONGO_DB
  } catch (e) {
    console.error(new Error(e))
    FreePort(process.pid)
  }
}
function runserver(err?: Error): any {
  if (err) throw err
  Start()
  console.clear()
  console.log(`server is running on port ${process.env.PORT}`)
}
server.listen(process.env.PORT, async () => {
  await runserver()
  console.clear()
  console.log(`server is running on port ${process.env.PORT}`)
})