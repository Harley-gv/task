const { db, DataTypes } = require('../utils/db.util')

const Task = db.define('task', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  limitDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  startDate: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  finishDate: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
})

module.exports = { Task }