const express = require('express')
const {getAllUsers, createUser, updateUser, deleteUser} = require('../controllers/user.controller')

const {createUserValidator} = require('../middlewares/userValidator.middleware')
const { userExists } = require('../middlewares/userExists.middleware');

//init router
const users = express.Router()
//routes
users.post('/',createUserValidator,createUser)
users.get('/',getAllUsers)
users.patch('/:id',userExists,updateUser)
users.delete('/:id',userExists,deleteUser)

module.exports = { users }