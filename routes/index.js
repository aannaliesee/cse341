const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.stevenFunction);
routes.get('/anna', myController.annaFunction);


module.exports = routes;