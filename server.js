const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  })
  .use('/', require('./routes'));

  app.listen(port, () => {
    console.log('Server running on port 3000');
  });

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to DB and listening on ${port}`);
  }
});
