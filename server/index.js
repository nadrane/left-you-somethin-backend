const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('../db/db')

app
  .use(bodyParser.urlencoded({ extended: true }))  // Are you ever sending url encoded http bodies?
  .use(bodyParser.json())

app.use(express.static('public'))
app.use('/api', require('./api'))

// What about serving through a static file server? Maybe have a views folder
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

db.sync()
    .then(function(){
      app.listen(1333);
        console.log('Server is listening on port 1333');

    })
    // What will the this be inside console.error?
    .catch(console.error);


// Why do we export app?
module.exports = app;



