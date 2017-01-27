const { Egg } = require('../db/index.js');
const router = require('express').Router();

  router.get('/', (req, res, next) => {
    res.send('Hit Eggs Page')
  });

    router.post('/', (req, res, next) => {
        Egg.create({
          goHereText: req.body.goHereText,
          latitude: req.body.latitude,
          longitude: req.body.longitude
        })
            .then(message => res.send(message));
    });

module.exports = router;
