const Sequelize = require('sequelize');
const db = require('./db')

module.exports = db.define('user', user = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});