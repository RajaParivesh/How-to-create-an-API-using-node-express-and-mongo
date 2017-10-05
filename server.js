const express = require('express');
const MongoClient  = require('mongodb').MongoClient;
const bodyParser   = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// All route imported from routes folder
require('./app/routes')(app, {});


// Port Listing
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
