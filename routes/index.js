const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.stevenFunction);
routes.get('/anna', myController.annaFunction);

router.use('/contacts', require('./contacts'));


module.exports = routes;

//comment to test github