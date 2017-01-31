'use strict';

const User = require('./user');
const Egg = require('./egg');

// Shouldn't these be belongsToMany since the relationship is many-to-many?
Egg.belongsTo(User, { as: 'sender'})
Egg.belongsTo(User, { as: 'receiver'})

// Be consistent in formatting. So many extra new lines

module.exports = {
    User, Egg
};
