const express = require('express')

const BASE_ROUTE = '/'
class LoginRoutes {
  _route
  contractService

  constructor() {
    this._route = express.Router()
    this.registerRoutes()
  }

  get route() {
    return this._route
  }

  registerRoutes() {
    this.route.get(BASE_ROUTE, (req, res) => res.send('Hi from Login!!!'))
    //this.route.post(BASE_ROUTE, ())
  }
}

module.exports = LoginRoutes
