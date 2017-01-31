const Sequelize = require('sequelize');
const db = require('./db')


// Be explicit about nulls again.
// What about password hashes?
const userSchema={
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
}

const userConfig = {}

const User = db.define('user', userSchema, userConfig);

module.exports=User;

