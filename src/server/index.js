const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

app.use('/api', require('./api'))

db.sync()
.then( () => {
  app.listen(1333)
})
.catch( err => {
  console.log('Error', err)
})



