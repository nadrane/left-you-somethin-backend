const api = require('express').Router();

api
  .use('/user', require('./user'))
  .use('/egg', require('./egg'))

// Send along any errors
api.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(500).send(err);  // Allow for the possibility of custom error statuses
                              // Only send a specific part of the error.
  //maybe res.status(err.status | 500).send(err.message)
});

api.use((req, res) => res.status(404).end());  //Good!

module.exports = api;

