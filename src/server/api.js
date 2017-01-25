const api = require('express').Router();

api
<<<<<<< HEAD
  .use('/user', require('./user'))
=======
  .use('/users', require('./users'))
>>>>>>> 3fbf0ff63ef37bc0c4a8fca66d204d47a8c12111
  .use('/messages', require('./messages'))

// Send along any errors
api.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(500).send(err);
});

// No routes matched? 404.
<<<<<<< HEAD
api.use((req, res) => res.status(404).end());

module.exports = api
=======
api.use((req, res) => res.status(404).end());
>>>>>>> 3fbf0ff63ef37bc0c4a8fca66d204d47a8c12111
