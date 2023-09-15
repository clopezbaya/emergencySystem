const express = require('express')
const UserController = require('../../controller/user/UserController')

const BASE_ROUTE = '/'
class UserRoutes {
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
    this.route.get(BASE_ROUTE, new UserController().findAllUsers)
    this.route.get(`/:userId`, new UserController().findUserById)
    this.route.post(BASE_ROUTE, new UserController().addNewUser)
  }
}

module.exports = UserRoutes
