const { Task } = require('../models/task.model');
const { catchAsync } = require('../utils/catchAsync.util');

const createTask = catchAsync(async (req, res, next) => {
  const { title, userId, limitDate } = req.body

  const newTask = await Task.create({
    title,
    userId,
    startDate: new Date(),
    limitDate,
  })

  res.status(201).json({
    status: 'success',
    message: 'created succes',
    newTask,
  })
})

const getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.findAll()
  res.status(200).json({
    status: 'success',
    message: 'get all tasks succes',
    tasks,
  })
})

const getTaskByStatus = catchAsync(async (req, res, next) => {
  const { status } = req.params;

  if (status === 'active' || 'completed' || 'late' || 'cancelled') {
    const info = await Task.findAll({ where: { status } })
    res.status(201).json({
      status: 'success',
      info,
    })
  }
})

const updateTaskById = catchAsync(async (req, res, next) => {
  const { finishDate } = req.body

  const { taskUpdate } = req

  if (taskUpdate.status === 'active') {
    await taskUpdate.update({ finishDate })
    let limitDate = new Date(taskUpdate.dataValues.limitDate)
    let finishDateUser = new Date(finishDate)
    

    if (finishDateUser.valueOf() < limitDate.valueOf()) {
      res.status(200).json({
        status: 'success',
        message: 'Completed',
        taskUpdate,
      })
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Late',
        taskUpdate,
      })
    }
  }
})

const cancelTask = catchAsync(async (req, res, next) => {
  const { taskCancel} = req

  await taskCancel.update({ status: 'Cancelled' })

  res.status(200).json({
    status: 'success',
    message: `The task Cancelled`,
  })
})

module.exports = {
  createTask,
  getAllTasks,
  getTaskByStatus,
  updateTaskById,
  cancelTask,
}