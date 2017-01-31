const { Egg } = require('../db/index.js');
const router = require('express').Router();

// Indentation
  router.get('/:eggId', (req, res, next) => {
    Egg.findOne({where: {id: req.params.eggId}})  //Good use of findOne
    .then(egg => res.send(egg))
  }); //.Catch errors


// Do we need an API for getting all eggs given a senderId?
// How would this API look? Query paremeters?
  router.get('/user/:userId', (req, res, next) => {
    Egg.findAll({ where: { receiverId: req.params.userId }})
    .then(eggs => res.send(eggs));
  }); //.Catch errors

  router.post('/', (req, res, next) => {
      Egg.create({
        // What about payload and goHereImage?
        goHereText: req.body.goHereText,
        payloadType: req.body.payloadType,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      })
          .then(egg => res.send(egg));
  }); //.Catch errors

  //What about PUT and DELETE routes? Will we ever need them?

module.exports = router;
