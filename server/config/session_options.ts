import * as session from 'express-session'
import * as connectMongo from 'connect-mongodb-session'

let MongoStore = connectMongo(session)

const STORE_OPTIONS = {
  collection: 'sessions',
  uri: process.env.MONGO_URL
}

const store = new MongoStore(STORE_OPTIONS)

const SESSION_OPTIONS = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: store
}

export default SESSION_OPTIONS