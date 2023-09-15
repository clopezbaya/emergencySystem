const express = require('express')
const UserModel = require('../../model/userModel')

class userController {
  findAllUsers = async (req, res) => {
    try {
      res.send(await new UserModel().find())
    } catch (error) {
      res.sendStatus(500).send(error)
    }
  }

  findUserById = async (req, res) => {
    try {
      const user = await new UserModel().findById(req.params.userId)
      if (user.length == 0) {
        res.status(404).json(`No record with this ID ${req.params.userId}`)
      } else {
        res.send(user)
      }
    } catch (error) {
      res.sendStatus(500).send(error)
    }
  }

  addNewUser = async (req, res) => {
    try {
      await new UserModel().add(req.body)
      res.status(201).send('Created Successfully')
    } catch (error) {
      res.sendStatus(500).send(error)
    }
  }
}

module.exports = userController
