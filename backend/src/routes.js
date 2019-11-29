const express = require('express');

const Spot = require('./controllers/SpotController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/spots', Spot.store);

module.exports = routes;