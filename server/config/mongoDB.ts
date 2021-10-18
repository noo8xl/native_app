import { connect } from 'mongoose'

const MONGO_OPTIONS: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

const mongo = connect(process.env.MONGO_URL, MONGO_OPTIONS)
  .then(() => {
    console.log('Successfully connected to database')
  })
  .catch((e?: Error) => {
    console.log("database connection failed...")
    console.error(e)
    process.exit(1)
  })

export default mongo