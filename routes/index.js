const express = require('express');
const routes = require('express').Router();
const myController = require('../controllers');
const router = express.Router();

routes.use('/', require('./swagger'));
routes.get('/', myController.stevenFunction);
routes.get('/anna', myController.annaFunction);

router.use('/contacts', require('./contacts'));


module.exports = routes;

//comment to test github