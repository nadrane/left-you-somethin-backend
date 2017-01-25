// const User = require('../db/Users.js');
const router = require('express').Router();

module.exports = router
  .get('/', (req, res, next) => {
    res.send('Hit Users Page')
    .catch(next);
    // User.findAll()
    // .then( users => {
    //   res.json(users)
    // })
    // .catch(next)
  })
  .get('/:user', (req, res, next) => {
    res.send('Got Single User')
    .catch(next);
  })
  .delete('/:user', (req, res, next) => {
    res.send('delete this user')
    .catch(next);
  });

