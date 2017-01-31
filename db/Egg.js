const Sequelize = require('sequelize');
const db = require('./db');

// Be consistent in formatting. So many extra new lines
const eggSchema = {

    // A image will not be stored as a string. Unless this is supposed to be a file path to an image
    // Probably should be a foreign key to another model that contains a file path.
    //Can this be null? Be explicit
    goHereImage: {
        type: Sequelize.STRING,

    },

    // Maximum length
    //Can this be null? Be explicit
    goHereText: {
        type: Sequelize.STRING,

    },
    // validate min and max for lat: -90 / +90
    // Can this be null? Be explicit
    latitude: {
        type: Sequelize.DECIMAL,

    },
    // validate min and max for long: -180 / +180
    // Can this be null? Be explicit
    longitude: {
        type: Sequelize.DECIMAL,

    },

    // Max length?
    // Can this be null?
    payload: {
        type: Sequelize.STRING,

    },

    // Here we were explicit about NULL. Good
    payloadType: {
        type: Sequelize.ENUM('Text', 'Audio', 'Video'), // Good use of ENUM
        defaultValue: 'Text',
        allowNull: false
    }
};

const eggConfig = {};

const Egg = db.define('egg', eggSchema, eggConfig);


module.exports = Egg;
