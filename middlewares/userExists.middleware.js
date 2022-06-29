const { User } = require('../models/user.model')

const { AppError } = require('../utils/appError.util')

const { catchAsync } = require('../utils/catchAsync.util')

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const userExists = await User.findOne({ where: { id } })

  if (!userExists) {
    return next(new AppError('User not found', 404))
  }

  req.user = userExists

  next()
})

module.exports = { userExists }