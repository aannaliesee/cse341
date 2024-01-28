const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);


app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to DB and listening on ${port}`);
  }
});
