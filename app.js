const express = require('express')
const { AppError } = require('./utils/appError.util')
const { globalErrorHandler } = require('./controllers/globalErrorHandler.controller')

//models
const { User } = require('./models/user.model')
const { Task } = require('./models/task.model')

//routes
const { users } = require('./routes/users.routes')
const { tasks } = require('./routes/tasks.routes')

//init express
const app = express()
app.use(express.json())

// model's relations
// 1 user <-----> M task
User.hasMany(Task, { foreignKey: 'userId' })
Task.belongsTo(User)

//endpoints
app.use('/api/v1/users', users)
app.use('/api/v1/tasks', tasks)

//Handle incoming unknown routes to the server
app.all('*', (req, res, next) => {
    next(
        new AppError(
            `${req.method} ${req.originalUrl} not found in this server`,
            404
        )
    );
});

// globalErrorHandler init
app.use(globalErrorHandler);

module.exports = { app }