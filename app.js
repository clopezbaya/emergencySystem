const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes')
const cors = require('cors')

const PORT = 3000
class ServerEmergency {
  app
  dbConnection

  constructor() {
    this.app = express()
    this.configEmergency()
  }

  configEmergency() {
    this.app.use(cors({ origin: '*' }))
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())

    this.app.get('/', (req, res) => res.send('Hi from app!!!'))
    routes(this.app)
  }

  startServerEmergency() {
    this.app.listen(PORT, () => {
      console.log(`the server is runnig on port: ${PORT}`)
    })
  }
}

const serverEmergency = new ServerEmergency()
serverEmergency.startServerEmergency()
