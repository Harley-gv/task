const { User } = require('../models/user.model');
const { catchAsync } = require('../utils/catchAsync.util');

const getAllUsers = catchAsync(async (req, res, next) => {
    const user = await User.findAll()
    res.status(200).json({
      user,
    })
  })
  
  const createUser = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body
  
    const newUser = await User.create({
      name,
      email,
      password,
    })
  
    res.status(201).json({
      status: 'success',
      newUser,
    })
  })
  
  const updateUser = catchAsync(async (req, res, next) => {
    const { userUpdate } = req
  
    const { name, email } = req.body
  
    await userUpdate.update({ name, email })
  
    res.status(201).json({
      message: 'User updated',
    })
  })
  
  const deleteUser = catchAsync(async (req, res, next) => {
    const { user } = req
  
    const userDeleted = await user.update({ status: 'Cancelled' })
  
    res.status(201).json({
      status: 'success',
      userDeleted,
    })
  })
  
  module.exports = { getAllUsers, createUser, updateUser, deleteUser }