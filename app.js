const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes')
const MysqlDB = require('./src/DBHandler.js')
const cors = require('cors')

const PORT = 3000
class ServerEmergency {
  app
  dbConnection

  constructor () {
    this.dbConnection = new MysqlDB(
      'localhost',
      'root',
      'yoiner12345',
      'sakila'
    )
    this.app = express()
    this.configEmergency()
    this.startEmergencyDB()
  }

  configEmergency () {
    this.app.use(cors({ origin: '*' }))
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())

    this.app.get('/', (req, res) => res.send('Hi from app!!!'))
    routes(this.app)
  }

  startServerEmergency () {
    this.app.listen(PORT, () => {
      console.log(`the server is runnig on port: ${PORT}`)
    })
  }

  startEmergencyDB () {
    this.dbConnection.start()
  }
}

const serverEmergency = new ServerEmergency()
serverEmergency.startServerEmergency()
