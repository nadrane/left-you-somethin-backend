const { Message } = require('../db/index.js');
const router = require('express').Router();

  router.get('/', (req, res, next) => {
    res.send('Hit Messages Page')
  });

    router.post('/', (req, res, next) => {
        console.log('here is req.body inside of message api router', req.body);
        Message.create({
          goHereText: req.body.goHereText,
          latitude: req.body.latitude,
          longitude: req.body.longitude
        })
            .then(message => res.send(message));
    });

module.exports = router;
