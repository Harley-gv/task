const { Task } = require('../models/task.model')

const { AppError } = require('../utils/appError.util')

const { catchAsync } = require('../utils/catchAsync.util')

const taskExists = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const taskExists = await Task.findOne({ where: { id } })

  if (!taskExists) {
    return next(new AppError('task not found', 404))
  }

  req.task = taskExists

  next()
})

module.exports = { taskExists }