const express = require('express')
const UserModel = require('../../model/userModel')

class userController {
  findAllUsers = async (req, res) => {
    try {
      res.send(new UserModel().find)
    } catch (error) {
      res.send(500).send(error)
    }
  }
}

module.exports = userController
