var Sequelize = require('sequelize');
var db = require('./db');

var messageSchema = {
    goHereImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    goHereText: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    payload: {
        type: Sequelize.STRING,
        allowNull: false
    },
};


var messageConfig = {};

const Message = db.define('message', messageSchema, messageConfig);




module.exports = Message;
