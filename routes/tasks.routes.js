const express = require('express');
const {createTask,getAllTasks,getTaskByStatus,updateTaskById,cancelTask} = require('../controllers/task.controller')

const {createTaskValidator} = require('../middlewares/taskValidator.middleware')
const { taskExists } = require('../middlewares/taskExists.middleware')

//init router
const tasks = express.Router()
//routes
tasks.post('/',createTaskValidator,createTask)
tasks.get('/',getAllTasks)
tasks.get('/:status',getTaskByStatus)
tasks.patch('/:id',taskExists,updateTaskById)
tasks.delete('/:id',taskExists,cancelTask)

module.exports = { tasks }